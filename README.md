# The Complate Guide how to build an application with Anguar

Angular is a Javascript Framework to create reactive Single-Page-Application, Single Page Application means you will see changed the page without refresh because the DOM (Domain Object Model) in HTML changed by Javascript Object

## The version of AngularJs

* Angularjs = Angular 1 dibuat dengan Javascript (Model View Component)
* Angular 2 = Dikembangkan dari Angular1 tapi menggunakan Typescript dengan fitur yang lebih baru (Model View ViewModel), Angular2 != AngularJs karena di AngularJS which is Angular1 menggunakan konsep Controller sedangkan di Angular 2 menggunakan Component. Jadi tidak jadi masalah jika anda belajar langsung ke Angular2 tanpa memulai dari Angular1
* Angular 4 = Angular2 yang memili fitur lebih baru lagi.

## Installing the AngularJs

Karena kita akan menggunakan AngularJs version 4 jadi ada beberapa yang harus kita siapkan yaitu
* NodeJs is Server side javascript framework, dengan NodeJs anda bisa connection dengan database seperti pemograman serverside lainnya seperti Java, C# dll.
* npm is Node Package Manager untuk Javascript. npm sama seperti maven di Java atau composer di PHP yang tujuannya adalah build, test, run, and dependecy management
* typescript is superset of javascript like Java (Oriented Object Based).
* Text Editor, text editor yang dapat digunakan untuk membuat aplikasi angularJs diantarnya ada banyak sekali tapi ada beberapa text edtior yang popular seperti Microsoft Visual Studio Code, Webstrom, Sublime, Atom dll.

### Installing NodeJS & NPM

The first you need install NodeJs to get the NPM. installing NodeJS...

* Installing NodeJs on Ubuntu 16.04 with ppa

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential
```

* Installing NodeJs on Fedora 26 Workstation/Server

```bash
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash - && dnf install -y nodejs gcc-c++ make
```

* Installing Windows
	* Download the binary exe from [NodeJs Website Downloads](https://nodejs.org/en/download/current/)
	* Install and set path User Environments
	* Run the Command Promnt for checking it works!

```bash
node -v
```

or 

```bash
npm -v
```

if the command seem like not detect 'npm or node` can't found. the solution is close the command promnt and check the path is right then open command promnt again.

### Installing typescript

Setelah install NodeJs dan Npm sekarang install base or the core of angular4 is typescript karena kita butuh typescript compiler `tsc`, untuk menginstall typscript kita menggunakan npm. karena typscript ini kita mau kita install global di system maka butuh user admininstrator jadi jika menjalankan di windwos harus buka dengan `Command Promnt with Adminstrator` dan jika di linux maka butuh `sudo`

* Linux

```bash
sudo npm install -g typescript
```

* Windows

```bash
npm install -g typescript
```

### Installing AngularCLI

Angular-CLI adalah command line untuk membuat template project angular, running aplikasi angularJs dan mengenerate seperti component, service, dll selain itu juga dapat menjalankan unit testing dengan menggunakan `karma.js`. Untuk menginstall tools `angular-cli` kita gunakan npm seperti berikut:

* Untuk Linux

```bash
sudo npm -g @angular/cli
```

* Untuk Windows dengan `Command Promnt with Administrator` 

```bash
npm -g @angular/cli
```

