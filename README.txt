Website: visienco.ch

Folder structure and assets to add:

- assets/images/
  - logo.png  (your official logo, PNG)
  - logo.svg  (optional vector logo)
  - hero.jpg  (home hero image)
  - orgadroid.jpg  (product visual)
  - team.jpg  (about page image)
  - favicon.png  (32x32)
  - partner1.png, partner2.png, ... (optional)

- assets/icons/
  - download.svg
  - mail.svg
  - phone.svg
  - location.svg

- assets/docs/
  - application-note.pdf  (IOB application note or similar)

- assets/video/
  - hero.mp4  (optional: local hero video; if used, swap <img> for <video>)

Pages:
- index.html (Home)
- technology.html
- partners.html
- about.html
- contact.html
- imprint.html
- privacy.html

Notes:
- All pages include commented HTML so you can understand the structure.
- Buttons are simple <a> elements styled via .btn classes to replace Wix-specific components.
- To use a hero video, place assets/video/hero.mp4 and replace the <img> in index.html with: 
  <video autoplay muted loop playsinline src="assets/video/hero.mp4"></video> and keep the overlay/caption layers.
- Update content and legal pages (imprint, privacy) with your real text.

Enjoy coding!
