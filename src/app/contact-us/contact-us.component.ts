import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line: ban-types
declare let ga: Function;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  twitterClick = () => {
    ga('send', 'event', {
      eventCategory: 'Social Contact Us',
      eventLabel: 'Twitter',
      eventAction: 'Clicked'
    });
  }

  facebookClick = () => {
    ga('send', 'event', {
      eventCategory: 'Social Contact Us',
      eventLabel: 'Facebook',
      eventAction: 'Clicked'
    });
  }

  instagramClick = () => {
    ga('send', 'event', {
      eventCategory: 'Social Contact Us',
      eventLabel: 'Instagram',
      eventAction: 'Clicked'
    });
  }

  linkedinClick = () => {
    ga('send', 'event', {
      eventCategory: 'Social Contact Us',
      eventLabel: 'Linkedin',
      eventAction: 'Clicked'
    });
  }

}
