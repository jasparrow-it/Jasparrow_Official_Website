# Jasparrow IT Solutions website

A responsive dark corporate website built with React + Vite.

## Included
- Responsive navigation and mobile menu
- Hero, company overview, capabilities, products, approach and contact sections
- Auro360 product link and ASID360 enquiry link
- Contact form that opens the visitor's email client (no backend or form storage)
- Basic SEO and Open Graph metadata

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```
The production site is generated in `dist/`.

## Deploy to Azure Static Web Apps
1. Push this project to a GitHub repository.
2. Create an Azure Static Web App and connect the repository.
3. Set build preset to **Custom** (or Vite if offered).
4. App location: `/`
5. Api location: leave blank
6. Output location: `dist`
7. Add the custom domain `jasparrowit.com` in the Static Web App's Custom domains settings and complete the DNS verification records shown by Azure.

## Before publishing
- Verify that `hello@jasparrowit.com` exists and is monitored. Update it in `src/App.jsx` if needed.
- Add the company's registered address, phone number and legal details if desired.
- Confirm the public positioning and ASID360 description/status.
- The contact form currently uses `mailto:`. For a proper server-side enquiry workflow, connect an API or form service before launch.
