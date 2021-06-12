import { Component, Input } from '@angular/core';

@Component({
  selector: 'ray-share-links',
  templateUrl: 'share-links.component.html',
  styleUrls: ['share-links.component.scss'],
})
export class ShareLinksComponent {
  @Input() url: string;
  @Input() title: string;
  @Input() vertical: boolean;

  public links: { link: () => string; icon: string }[] = [
    {
      link: () =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${this.url}`,
      icon: 'linkedin',
    },
    {
      link: () =>
        `https://twitter.com/intent/tweet?text=${this.title}&url=${this.url}`,
      icon: 'twitter',
    },
    {
      link: () =>
        `https://www.facebook.com/dialog/share?app_id=526248148560791&display=popup&href=${this.url}&redirect_uri=${this.url}`,
      icon: 'facebook',
    },
  ];

  public share(link: () => string): void {
    window.open(link(), '_blank').focus();
  }
}
