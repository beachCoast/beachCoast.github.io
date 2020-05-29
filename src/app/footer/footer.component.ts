import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebookF, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// tslint:disable-next-line: ban-types
declare let ga: Function;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

  twitterClick = () => {
    ga('send', 'event', {
      eventCategory: 'Social Footer',
      eventLabel: 'Twitter',
      eventAction: 'Clicked'
    });
  }

  facebookClick = () => {
    ga('send', 'event', {
      eventCategory: 'Social Footer',
      eventLabel: 'Facebook',
      eventAction: 'Clicked'
    });
  }

  instagramClick = () => {
    ga('send', 'event', {
      eventCategory: 'Social Footer',
      eventLabel: 'Instagram',
      eventAction: 'Clicked'
    });
  }

  linkedinClick = () => {
    ga('send', 'event', {
      eventCategory: 'Social Footer',
      eventLabel: 'Linkedin',
      eventAction: 'Clicked'
    });
  }

  youtubeClick = () => {
    ga('send', 'event', {
      eventCategory: 'Social Footer',
      eventLabel: 'Youtube',
      eventAction: 'Clicked'
    });
  }
}
