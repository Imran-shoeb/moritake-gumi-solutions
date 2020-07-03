import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moritake-gumi-solutions';

  constructor(
    translate: TranslateService
  ) {

    //setting the default language
    translate.setDefaultLang("jp");

    // DETECTING THE BROWSER LANGUAGE AND SET ACCORDINGLY
    let userLanguage;
    userLanguage = navigator.language;

    if (userLanguage === "en-US") {
      userLanguage = "en";
    }
    if (userLanguage === "ja") {
      userLanguage = "jp";
    }
    translate.use(userLanguage);
  }
}
