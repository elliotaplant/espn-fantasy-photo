# ESPN Fantasy Photo Host

A simple and efficient photo hosting service built specifically for ESPN Fantasy Sports team photos. This Cloudflare Worker application allows users to upload, crop, and host images that are perfectly sized for ESPN fantasy platforms.

## Features

- 🖼️ Square image cropping with interactive preview
- 📱 Responsive design that works on mobile and desktop
- 🔄 Automatic image resizing to ESPN's recommended 200x200px format
- 📋 One-click URL copying for easy sharing
- 🗑️ Image deletion capability
- 💾 Local history of your last 10 uploads
- ⚡ Fast serving through Cloudflare's global CDN

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) for Cloudflare Workers
- A Cloudflare account with Workers and R2 enabled

## Setup

1. Clone the repository:

```bash
git clone [your-repo-url]
cd espn-fantasy-photo
```

2. Install dependencies:

```bash
npm install
```

3. Configure your Cloudflare R2 bucket:

   - Create an R2 bucket named `ESPN_FANTASY_PHOTOS_BUCKET` in your Cloudflare account
   - Update your `wrangler.toml` with the appropriate bucket binding

4. Development:

```bash
npm run dev
```

5. Deploy:

```bash
npm run deploy
```

## Usage

1. Visit the deployed application URL
2. Click "Choose Photo" to select an image from your device
3. Use the cropping tool to adjust your photo into a square format
4. Click "Upload Cropped Photo"
5. Copy the generated URL and use it in your ESPN fantasy team settings

## Technical Details

- Built with Cloudflare Workers for edge computing
- Uses R2 for object storage
- Frontend built with vanilla JavaScript
- Integrates [Cropper.js](https://fengyuanchen.github.io/cropperjs/) for image manipulation
- TypeScript support for better development experience

## Development

The project includes several npm scripts:

- `npm run dev`: Start local development server
- `npm run deploy`: Deploy to Cloudflare Workers
- `npm test`: Run tests using Vitest
- `npm run cf-typegen`: Generate TypeScript types for Cloudflare Workers

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Cropper.js for the image cropping functionality
- Cloudflare for the Workers and R2 platform
- ESPN Fantasy Sports for the inspiration
