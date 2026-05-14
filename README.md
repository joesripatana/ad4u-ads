# ThaiScreen Ads Booking Prototype

Open `index.html` in a browser to run the prototype. It uses local browser storage, so login, cart, screens, adverts, roles, and orders persist on the same machine.

## Demo Logins

- Super admin: `owner@thaiscreen.test` / `admin123`
- Operator: `operator@thaiscreen.test` / `operator123`
- Customer: `customer@thaiscreen.test` / `customer123`

## What Is Built

- Customer registration and login
- Customer advert upload form for image or video adverts
- 15-second billing blocks, rounded up from the uploaded advert duration
- Thailand display selection by map overlay, list, filters, and screen details
- Google Calendar-style slot grid with booked slots blocked
- Basket with editable/deletable booking items and total price
- Super admin control room
- Admin/operator screen inventory, monitoring status, tablet IDs, and pairing simulation
- Super admin role assignment for admin, operator, customer, and super admin
- Advert approval screen
- Tablet player view that simulates a physical display pulling its schedule

## Tablet Advert Delivery Design

Each physical screen is a tablet connected to the internet and paired to one screen record in the platform.

1. Install the player web app on the tablet and save a unique `tabletId`.
2. In the admin panel, create the screen location with province, venue, price, tags, map position, and tablet ID.
3. The tablet calls a server endpoint like `/api/player/{tabletId}/schedule` every 60 seconds.
4. The server returns only approved adverts booked for that exact screen and current time window.
5. The tablet downloads and caches the image/video advert media.
6. The tablet plays each advert for its billable duration, using 15-second blocks.
7. After playback, the tablet posts a proof-of-play log to `/api/player/{tabletId}/proof`.
8. Admins monitor online/offline status, brightness, last seen time, and playback logs.

For production, the static prototype should become a full-stack app with a database, object storage for advert media, payment gateway integration, Google Maps API, background scheduling, and a real tablet player service worker for offline-safe caching.
