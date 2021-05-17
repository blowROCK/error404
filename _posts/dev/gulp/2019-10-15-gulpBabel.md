---
layout: post
comments: true
title: '[DEV] GULP BABEL을 이용한 기본 프로젝트'
categories: [dev]
tags: [gulp]
date: 2019-05-04
---
![headerimg](/assets/img/subcate/gulp-babel.png)

## GULP BABEL

~~~javascript
// 외부 컴포넌츠 설정 
// 외부 프레임워크나 css가 필요하면 여기 등록하면 됨.
const COMPONENTS = [
  "src/components/jquery/jquery-3.4.1.min.js"
];
const COMPONENTS_CSS = [
  "src/components/flexboxgrid/flexboxgrid.min.css"
];

// 각 파일을 가져오고 내보내는 위치를 설정함.
// 말 그대로 ROUTES
const ROUTES = {
  pug: {
    watch: "src/**/*.pug",
    src: "src/*.pug",
    dest: "build"
  },
  img: {
    src: "src/img/*",
    dest: "build/img"
  },
  js : {
    watch : "src/js/**/*.js",
    src : "src/js/main.js",
    dest: "build/js"
  },
  scss: {
    watch: "src/scss/**/*.scss",
    src: "src/scss/style.scss",
    dest: "build/css"
  }
};
// 서버로 내보낼 때, 쓰기 위한 전역 변수.
var production = false;

// 컴포넌츠를 모두 가져와 bundle.css, js로 합쳐서 내보냄.
const components = () => {
  var JS_TASK, CSS_TASK;
  JS_TASK = gulp.src(COMPONENTS)
    .pipe(concat('bundle.js')) 
    .pipe(stripDebug()) // 콘솔 로그를 지움
    .pipe(uglify()) // min 파일이 아닌 경우에 어글리 파이를 해주기 위함
    .pipe(gulp.dest(ROUTES.js.dest));
  CSS_TASK = gulp.src(COMPONENTS_CSS)
    .pipe(concat('bundle.css')) 
    .pipe(miniCSS()) // 미니파이해줌.
    .pipe(gulp.dest(ROUTES.scss.dest));
  return merge(JS_TASK, CSS_TASK); // 두가지 테스크를 한 후 합쳐서 내보내준다.
}

// PUG 파일을 HTML로 컴파일
const pugBuild = () => {
  return gulp
    .src(ROUTES.pug.src)
    .pipe(g_pug())
    .pipe(gulp.dest(ROUTES.pug.dest));
};

// 이미지를 압축 최적화 해줌.
const imgBuild = () => {
  return gulp
    .src(ROUTES.img.src)
    .pipe(g_img())
    .pipe(gulp.dest(ROUTES.img.dest));
};

// ES06를 바닐라 JS로 변환 후 uglify 해준다.
const jsBuild = () => {
  return gulp
    .src(ROUTES.js.src)
    .pipe(bro({
      transform: [
        babelify.configure({ presets: ["@babel/preset-env"] }),
        [ 'uglifyify', { global: true } ]
      ]
    }))
    .pipe( gulpif(production, stripDebug()) ) // 만약 릴리즈 할 경우 콘솔로그를 모두 지워줌.
    .pipe( gulp.dest(ROUTES.js.dest) );
}

const webserver = () => {
  return gulp
    .src("build")
    .pipe(
      g_ws({ livereload: true, open: true }) // 로컬에서 개발 서버를 오픈 후 라이브 로드 해줌.
    );
};

// SCSS를 빌드한다.
const scssBuild = () => {
  return gulp
    .src(ROUTES.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer()) // 다양한 브라우저에 최적화함.
    .pipe(miniCSS()) // 미니파이
    .pipe(gulp.dest(ROUTES.scss.dest));
};

// 깃허브에 지정 브런치에 릴리즈 해준다.
const deploy = () =>{
  return gulp
    .src("build/**/*")
    .pipe(ghPages({
      brach: "release"
    }));
}

// 감시할 목록
const watch = () => {
  gulp.watch(ROUTES.pug.watch, pugBuild);
  gulp.watch(ROUTES.scss.watch, scssBuild);
  gulp.watch(ROUTES.js.watch, jsBuild);
  gulp.watch(ROUTES.img.src, imgBuild);
};

// 매번 빌드 할때마다, 지워줘야함
const clean = () => {
  return del(["build/", ".publish"]);
};

//만약 릴리즈 한다면, 전역변수를 true 하여 다른 방식으로 작동하도록함.
//TODO: 다른 깔끔한 방법을 찾아볼 것..ㅠ
const onProduct = (done) => {
  production = true;
  done();
}

// 테스크 모음
const live = gulp.parallel([webserver, watch]);
const prepare = gulp.series([clean, components, imgBuild]);
const assets = gulp.series([pugBuild, scssBuild, jsBuild]);

// 명령어 모음
export const build = gulp.series([prepare, assets])
export const dev = gulp.series([build, live]);
export const release = gulp.series([onProduct, build, deploy]);
~~~

> 1. 다양하게 응용이 가능하도록 기본만 지켰다.
> 2. 프로젝트를 깃에 업로드 해놓았다. 참고하세용. [**깃으로 연결**](https://github.com/blowROCK/rootproject){:target="_blank"}