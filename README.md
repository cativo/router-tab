[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)

# RouterTab

Router-Tab Directive

### Install

    npm install @cativo/router-tab --save

### Import RouterTabModule

    @NgModule({
      declarations: [
        AppComponent, PageAComponent, PageBComponent, PageCComponent
      ],
      imports: [
        RouterTabModule, // this module

        RouterModule.forRoot([
          {path: '', pathMatch: 'full', redirectTo: 'a'},
          {path: 'a', component: PageAComponent},
          {path: 'b', component: PageBComponent},
          {path: 'c', component: PageCComponent}
        ]),
        BrowserModule,
        BrowserAnimationsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {
    }

### use routerTabs On MatTabGroup

    <mat-tab-group routerTabs>
      <mat-tab label="Page A" routerLink="a"></mat-tab>
      <mat-tab label="Page B" routerLink="b"></mat-tab>
      <mat-tab label="Page C" routerLink="c"></mat-tab>
    </mat-tab-group>
    <router-outlet></router-outlet>
