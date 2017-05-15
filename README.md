Stylup
======

Stylup is preprocessor that allows you to write class names in an easier manner when using utility classes for responsive designs.

## Usage

It works by looking for certain constructs inside each element's class attribute and then parses them into valid conventional HTML class names.

For example if you write

```html
<div class="hidden@sm [span 2@md 4@lg 8@xl]"></div>
```

Stylup will convert the markup into valid HTML class names

```html
<div class="hidden-sm span-2-md span-4-lg span-8-xl"></div>
```

Demo: http://sevenupcan.jsbin.com/yuhupi/

## Installation

```
npm install stylup --save-dev
```

### Gulp

Example using gulp, requires [gulp-dom](https://www.npmjs.com/package/gulp-dom).

```
var gulp        = require('gulp'),
    dom         = require('gulp-dom'),
    stylup      = require('stylup');


gulp.task('stylup', function() {
    return gulp.src('./src/**/*.html')
        .pipe(dom(function(){
            stylup(this);
            return this;
        }))
        .pipe(gulp.dest('./dist'));
});
```

## Syntax

### Groups

```html
<div class="[text uppercase strikethrough]"></div>
```

### Queries

```html
<div class="@sm([columns 2]) @md([span 3])"></div>
```

### Shorthand

```html
<div class="hidden@sm [span 2@md 4@lg 8@xl])"></div>
```

## About / Feedback

This tool is a bit of an experiment. I started developing after trying to create my own CSS framework. I found that no matter how I organised my CSS it was still difficult to write HTML class names in a way which was quick and manageable. I looked at several different solutions and decided that creating a custom markup language was the direction I wanted to take.

I've taken inspiration from other authors who are also discussing similar things in this space. If you are interested on the subject you should also check out Glen Madderns, [Attribute Modules for CSS](http://glenmaddern.com/articles/introducing-am-css).

The current syntax I'm using was influenced by an idea Harry Roberts thought of to visually group [related class names](http://csswizardry.com/2014/05/grouping-related-classes-in-your-markup/). I decided to use this format because it was easier to build and prove as a concept and I wanted it to feel distinctive yet familiar to existing space delimited HTML class names.

I started writing this tool as a project to practice my coding skills and since have learned a lot about JavaScript and programming. Unfortunately though you may notice some problems that I couldn't foresee. If you do find any bugs or have some feedback feel free to create an issue or get in touch with me.

Thanks to everyone who helped me write this tool and supported me along the way. A big thanks goes to [Justin Perry](https://github.com/ourmaninamsterdam), [Jim Myhrberg](https://github.com/jimeh) and Khalid Akram.
