# Getting started with @angular/cli

`@angular/cli` is a command line interface for angular

* Makes it easy to create an application
* Generate components, routes, services and pipes with a simple command
* Easy test app locally


## Generate New Project

Membuat project dari template `@angular/cli` dengan perintah seperti berikut:

```bash
ng new application-name
```

and hit Enter then you will see the structure of application:

```bash
.
├── e2e
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── karma.conf.js
├── package.json
├── package-lock.json
├── protractor.conf.js
├── README.md
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
└── tslint.json

5 directories, 26 files
```

## Struktur directory & file konfigurasi

* src/
  * app/ `Untuk membuat component, service, routes dll`
  * assets/ `Untuk menyimpan file image, atau resources lainnya`
  * environments/ `Untuk profiling seperti production, testing, development`
  * index.html `Halaman utama yang diload component`
  * main.ts `Main aplikasi angularJs jadi fungsinya ngeload component, module, dan service yang dibutuhkan`
  * test.ts
  * style.css
* tsconfig.json `Configurasi typescript seperti target ke es5, output setelah compile lokasinya ditaro dimana dll`
* package.json `Dependency management, dependency yang dibutuhkan oleh angular js seperti typescript, bootstrap dll`

## Running angularJs project with `ng` command

Untuk menjalankan Project angularJs yang dibuat dengan `@angular/cli` kita bisa menjalankannya dengan perintah

```bash
ng serve --open
```

then you will see the console log like this:

```bash
dimmaryanto93@Aspire-E5:~/Learning/angular4-complate-guide/first-ng-app$ ng serve
** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
Date: 2017-09-17T07:00:07.670Z                                                          
Hash: 20d66c64a4fe74cb1cfe
Time: 7896ms
chunk {inline} inline.bundle.js, inline.bundle.js.map (inline) 5.83 kB [entry] [rendered]
chunk {main} main.bundle.js, main.bundle.js.map (main) 8.58 kB {vendor} [initial] [rendered]
chunk {polyfills} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 209 kB {inline} [initial] [rendered]
chunk {styles} styles.bundle.js, styles.bundle.js.map (styles) 11.3 kB {inline} [initial] [rendered]
chunk {vendor} vendor.bundle.js, vendor.bundle.js.map (vendor) 2.29 MB [initial] [rendered]

webpack: Compiled successfully.

```

And then finally `** NG Live Development Server is listening on localhost:4200, open your browser on ` [http://localhost:4200/](http://localhost:4200/) ` **`

then it will return to me

![Halo angular](src/assets/welcome-app.png)


## Undestanding the setup of AngularJs Project

Untuk setup project angular, kita buat yang paling sering digunakankan ja ya supaya tidak terlalu banyak diantaranya seperti berikut:

* `tsconfig.json`
* `package.json`
* `angular-cli.json` 

### `tsconfig.json`

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2017",
      "dom"
    ]
  }
}
```

Banyak property nah jadi kita jelaknan satu-persatu ya

  * `compileOnSave` tujuannya ketika file di save nanti npm akan compile otomatis
  * `compilerOptions` adalah opsi compiler bagi `tsc`
    * `outDir` adalah nantnya khan typescript akan menghasilkan file dengan format javascript nah hasilcompilenya itu akan di simpan di folder `dist/out-tsc`
    * `sourceMap` ini tujuannya jika bernilai `true` ini akan mempermudah ketika development karena error messagenya akan di tujukan langsung di typescriptnya tpi klo nilainya `false` biasanya error lognya di arahin ke javascript.
    * `moduleResoulution` ini digunakan untuk system modulenya menggunakan `node` artinya nodeJs
    * `emitDecoratorMetadata` dan `experimentalDecorators` digunakan untuk mengaktifkan decorator klo di java decorator itu seperti annotation `@Component`
    * `target` ini adalah setelah di compile di ubah ke versi javascript seperti contohnya `es5` ini berpengaruh di browsernya apakah udah support.
    
    
### `package.json`

```json
{
  "name": "first-ng-app",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^4.2.4",
    "@angular/common": "^4.2.4",
    "@angular/compiler": "^4.2.4",
    "@angular/core": "^4.2.4",
    "@angular/forms": "^4.2.4",
    "@angular/http": "^4.2.4",
    "@angular/platform-browser": "^4.2.4",
    "@angular/platform-browser-dynamic": "^4.2.4",
    "@angular/router": "^4.2.4",
    "core-js": "^2.4.1",
    "rxjs": "^5.4.2",
    "zone.js": "^0.8.14"
  },
  "devDependencies": {
    "@angular/cli": "1.4.2",
    "@angular/compiler-cli": "^4.2.4",
    "@angular/language-service": "^4.2.4",
    "@types/jasmine": "~2.5.53",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~6.0.60",
    "codelyzer": "~3.1.1",
    "jasmine-core": "~2.6.2",
    "jasmine-spec-reporter": "~4.1.0",
    "karma": "~1.7.0",
    "karma-chrome-launcher": "~2.1.1",
    "karma-cli": "~1.0.1",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.1.2",
    "ts-node": "~3.2.0",
    "tslint": "~5.3.2",
    "typescript": "~2.3.3"
  }
}
```

Nah `package.json` ini pada dasarnya sama seperti `pom.xml` jadi isinya berupa nama aplikasi, versi aplikasi dan dependency yang kita gunakan. Ok nah kita jelaskan aja ya

* `name` ini adalah nama aplikasi kita
* `version` ini adalah versi untuk aplikasi kita
* `lisence` ini adalah lisence yang digunakan contohnya seperti `MIT`, `GNU`, dll.
* `script` ini adalah script untuk menjalakan perntah contohnya `ng start`
* `dependencies` dan `devDependencies` adalah library yang kita gunakan bedanya adalah klo `dependencies` itu lib yang bener2 dipake di production nah sedangkan `devDependencies` itu biasanya digunakan untuk development contohnya `lite-server` nah karena kita butuh server yang embedded ketika development jadi kita butuh itu tpi klo udah production khan udah ada web server yang di install tersediri di sistem jadi ya gak perlu lagi pake `lite-server`.


### `angular-cli.json`

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "project": {
    "name": "first-ng-app"
  },
  "apps": [
    {
      "root": "src",
      "outDir": "dist",
      "assets": [
        "assets",
        "favicon.ico"
      ],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "test": "test.ts",
      "tsconfig": "tsconfig.app.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
      "styles": [
        "styles.css"
      ],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ],
  "e2e": {
    "protractor": {
      "config": "./protractor.conf.js"
    }
  },
  "lint": [
    {
      "project": "src/tsconfig.app.json"
    },
    {
      "project": "src/tsconfig.spec.json"
    },
    {
      "project": "e2e/tsconfig.e2e.json"
    }
  ],
  "test": {
    "karma": {
      "config": "./karma.conf.js"
    }
  },
  "defaults": {
    "styleExt": "css",
    "component": {}
  }
}
```

Setup file `angular-cli.json` ini hanya berlalu jika menggunakan `@angular/cli` sebagai temlate projectnya jadi di atas terdiri dari beberapa property yaitu seperti berikut:

* `$schema` ini adalah schema yang digunakan untuk angularjs mapping system projectnya
* `name` ini adalah nama aplikasi kita
* `apps`
  * `root` adalah source code kita untuk aplikasi angular js
  * `outDir` adalah output yaitu hasil compile ke javascript
  * `index` adalah halaman utama yang akan diload
  * `styles` adalah file-file css yang akan diload dan nantnya di webpack atau di bundle sebagai include file css contohnya include file `bootstrap` dengan manambahkan dari node_modules seperti berikut `../node_modules/bootstrap/css/bootstrap.min.css`
  * `scripts` adalah file-file js yang akan diload dan nantinya akan di webpack atau di bundle sebagai include file js contohnya include file `jquery`
  
## Undestanding browser say `Hello to app`

Untuk memahami bagaimana browser menampilkan `Hello to app` kita harus pahami dulu stepnya di antarnya:

* `src/app/app.component.ts`
* `src/app/app.component.html`
* `src/index.html`

OK, show me the code!!!

## `src/app/app.component.ts`

```ts 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
```

Koding diatas adalah implementasi dari component di angular4 jadi component ini dia mengurus atau mendeklarasi yang mana view dan model serta binding data untuk view-model. Di component terlihat ada annotation which is decorator (`@Component()`) nah decorator component itu memili property yang wajid bada yaitu `selector` dan (`templateUrl` atau `template`)

Penjelasan properties yang ada di `@Component({...})` 

* `selector` digunakan untuk membuat tag atau attribut custome di html contohnya di halaman `index.html` nanti pasti ada attribut `<app-root></app-root>`
* `template` berisi element html yang nantinya akan di includekan element html yang memiliki seletor `app-root` tersebut.

Selanjutnya kita didalam `class` `AppComponent` memiliki sebuah variable dengan nama `title` yang di beri nilai `app`, ok seperti itulah penjelasan tentang component. selanjutnya kita lihat di view yaitu `app.component.html`

## `src/app/app.component.html`

Nah jadi view `src/app/app.component.html` dipanggil dari `src/app/app.component.html` dengan menggunakan `templateUrl` dari `@Component` pada class `AppComponent`. jadi component tersebut mendifinisikan bahwa viewnya akan merender file `app.component.html` nah jadi seperti berikut isinya:

```html
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{title}}!
  </h1>
  <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>
<h2>Here are some links to help you start: </h2>
<ul>
  <li>
    <h2><a target="_blank" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  </li>
  <li>
    <h2><a target="_blank" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
  </li>
  <li>
    <h2><a target="_blank" href="https://blog.angular.io/">Angular blog</a></h2>
  </li>
</ul>
```

Nah klo anda perhatikan diatas ya, isinya pada dasarnya sama seperti perintah HTML biasa hanya mungkin ada yang berbeda yaitu

```html
<h1>
  Welcome to {{title}}!
</h1>
```

Ok jadi initnya untuk menampilkan `Welcome to app` itu angular menggunakan Data Binding? apa itu Data Binding.

Jadi Data Binding itu sama dengan Komuikasi antara view dan component dengan menggunakan perantara diantaranya ada 

* String Interpolation
* Property Binding
* Event Binding
* Two way Binding

Nah jadi dengan menggunakan double kurung kurawal `{{` di ikuti dengan property yang di define di component contohnya seperti `title` `}}` maka akan menampilkan `Welcome to app`. nah jadi itu namanya String Interpolation.

### `index.html`

Nah jadi selector `app-root` yang ada dalam component alias yang menampilkan content `Welcome to app` ditampilkannya melalui `index.html` seperti berikut:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>FirstNgApp</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

## Include bootstrap the css framework & jquery 

Untuk menginclude ke dua framework tersebut kita harus install dulu depedencynya dengan menggunakan perintah berikut:

```bash
npm install --save bootstrap jquery
```

Dan kita harus include file css dan jsnya di `angular-cli.json` seperti berikut:

```json
"styles": [
  "styles.css",
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "../node_modules/bootstrap/dist/css/bootstrap-theme.min.css"
],
"scripts": [
  "../node_modules/bootstrap/dist/js/bootstrap.min.js",
  "../node_modules/jquery/dist/jquery.min.js"
]
```

Nah sekarang coba di jalankan dan di browse kemudian lihat di inspect element seperti berikut:

![Include bootstrap & JQuery](src/assets/include-bootstrap.png)


## DataBinding

DataBinding bisa di bayangkan sebagai komunikasi, jadi magsudnya kita bisa terkoneksi antara property yang dibuat di component dengan yang view which is template.
DataBinding terdiri dari 

* String Interpolation
* Property Binding
* Two Way Binding

### String Interpolation

String Interpolation, konsep ini sama seperti pada teknologi web pada umumnya karena pada dasarnya hanya one way out jadi hanya fungsinnya menampilkan saja dari property di component ke view template. Contoh penggunaan String Interpolation seperti berikut:

Didalam sebuah component memiliki property `title` seperti berikut:

```ts 
/** 
 * component decorator & import angular/core
**/
export class AppComponent{
 title: string = 'Halo String Interpolation'; 
}
```

Nah di template or view, kita bisa menampilkan `value` dari property `title` tersebut dengan cara seperti berikut:

```html
<h3>{{title}}</h3>
``` 

Yaitu dengan menggunakan double qurlybracket ```{{namaProperty}}``` yang diikuti dengan menggunakan nama variable contohnya `title`.

### Property Binding

Jika String Interpolation hanya menampilkan saja, dengan Property Binding kita mengisi nilai dari view ke component ini artinya fitur sebaliknya dari String Interpolation. contohnya misalnya kita punya view (template) berupa html seperti berikut:

```html
<input type="text" name="judul" [ngModel]="title">
```

jadi Dari text inputan tersebut nilai yang di inputkan akan otomatis terisi ke property yang ada component dengan nama variable `title`. Property Binding ini ditandai dengan squarebrucket `[propertyName]` yang di assign ke suatu property di component.

### Two way Banding

Jadi Two way banding ini ada gabungan antara ke 2 binding sebelumnya yaitu String Interpolation dan Property Binding jadi intinya kita punya fitur masukan dan output. berikut cara penggunaanya:

```html
<input type="text" name="title" [(ngModel)]="title"> : value will be show here! when you input some text {{title}}
```

Kemudian kita deklarasi property di component dengan nama `title` seperti berikut:

```ts 
export class AppComponent{
 title: string = 'Halo String Interpolation'; 
}
```

Maka ketika awal di buka akan menampilkan `Halo Spring Interpolation` ketika text field ubah dan apa yang terjadi walll text pun ikut berubah karena fitur Two way Banding.

## Directives

Directive adalah Instruksi untuk memanipulasi Domain Object Model (DOM) di HTML, ada beberapa perintah directive yaitu 

* Untuk perulangan
  * `*ngFor`
* Untuk percabangan
  * `ngIf`
  * `ngSwitch`
