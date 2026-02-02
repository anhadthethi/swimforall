# Swim Access - Youth Swimming Access Nonprofit

A modern, responsive website for a nonprofit organization that provides free swim equipment kits to children ages 8-12, removing financial barriers to swimming lessons and water safety education.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized with Next.js 14 and Tailwind CSS
- **Accessible**: WCAG 2.1 AA compliant
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Forms**: Integrated forms for kit requests and general inquiries

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: Formspree integration ready
- **Deployment**: Vercel-ready

## Pages

- **Home (/)**: Hero section, mission, how it works, impact stories, CTA
- **About (/about)**: Organization story, problem statement, Bridge Model differentiation, founder's note
- **Get a Kit (/get-kit)**: Eligibility, kit contents (6 items), application form with reassurance messaging
- **Kit Request Confirmation (/kit-request-confirmation)**: Post-submission page with 3-step timeline and next steps
- **Donate (/donate)**: Gear and financial donation options with impact visualization
- **Get Involved (/get-involved)**: Volunteer opportunities and partnerships
- **Contact (/contact)**: Contact form, FAQ, alternative contact methods
- **Privacy Policy (/privacy)**: Data handling, email communication, children's privacy
- **Terms of Service (/terms)**: Program scope, safety disclaimer, eligibility details

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── layout.tsx                      # Root layout with navigation and footer
│   ├── page.tsx                        # Home page
│   ├── about/
│   │   └── page.tsx                    # About page with Bridge Model section
│   ├── get-kit/
│   │   └── page.tsx                    # Kit application page
│   ├── kit-request-confirmation/
│   │   └── page.tsx                    # Post-submission confirmation page
│   ├── donate/
│   │   └── page.tsx                    # Donation page
│   ├── get-involved/
│   │   └── page.tsx                    # Volunteer/partner page
│   ├── contact/
│   │   └── page.tsx                    # Contact page
│   ├── privacy/
│   │   └── page.tsx                    # Privacy policy
│   └── terms/
│       └── page.tsx                    # Terms of service
├── components/
│   ├── Navigation.tsx                  # Site navigation
│   ├── Footer.tsx                      # Site footer with newsletter and privacy links
│   └── ui/                             # shadcn/ui components
├── lib/
│   └── utils.ts                        # Utility functions
├── public/
│   └── images/                         # User-uploaded images
└── BACKEND_INTEGRATION.md              # Form backend setup guide
```

## Customization

### Brand Colors
The site uses custom CSS variables for brand colors defined in `app/globals.css`:
- Primary Blue: #0284C7
- Secondary Teal: #14B8A6
- Accent Orange: #F97316
- Success Green: #10B981

### Photography & Visual Enhancement Guidelines

The site now features real images strategically placed for maximum emotional impact:

#### **Homepage Hero Section** ✅
- **Image**: `helping-kids1.png` (children learning to swim with instructor)
- **Placement**: Full-width background with 15% dark overlay
- **Headline**: "Every Child Deserves the Chance to Learn to Swim"
- **Subheadline**: "Removing barriers to swimming access—one kit at a time."
- **CTAs**: White "Learn More" button with blue text (high contrast), orange "Request a Kit" button
- **Height**: Full viewport height for dramatic impact

#### **About Page - Founder's Note** ✅
- **Image**: `founder-coaching.png` (founder coaching swimmer at pool)
- **Layout**: Two-column with text left, image right
- **Caption**: "Founder and competitive swimmer" (subtle, italicized, gray)
- **Style**: Slightly right-aligned, professional but authentic
- **Note**: No name displayed, no centering, professional understatement

#### **About Page - Why Swimming Matters Section** ✅
- **Image**: `lilbroswiming.jpeg` (child learning to swim)
- **Layout**: Two-column with text left, image right
- **Positioning**: Custom crop at 40% vertical to frame child in lower portion of image
- **Height**: 384px (h-96)
- **Style**: Rounded corners with shadow for visual depth
- **Icons**: Color-coded emojis (🛟 blue lifesaver, 📊 teal chart, 💰 orange money) replacing red exclamation marks

#### **About Page - Bridge Model Section** ✅
- **Purpose**: Differentiates Swim Access from traditional programs without sounding critical
- **Layout**: Two-column comparison (Traditional Programs vs Our Bridge Model)
- **Tone**: Partnership-friendly, acknowledges traditional programs are valuable
- **Colors**: Gray for traditional (neutral), blue for bridge model (confident)
- **Focus**: Upstream barriers vs instruction, additive not antagonistic

### Image Directory
All images should be placed in: `/public/images/`
- `helping-kids1.png` — Homepage hero
- `founder-coaching.png` — About page founder section
- `lilbroswiming.jpeg` — About page Why Swimming Matters section

### Forms & Integration
Forms are currently set up for client-side handling with post-submission redirect. 

**To enable form submissions and data collection**, see [BACKEND_INTEGRATION.md](./BACKEND_INTEGRATION.md) for:
- **Recommended**: Formspree integration (easiest, free tier available)
- **Advanced**: Airtable connection for status tracking
- **Custom**: Node.js backend with Vercel Postgres

Quick start: Set up Formspree (10 minutes), then update the form endpoint in `app/get-kit/page.tsx`

### Kit Contents (6 Items)
The kit includes essential beginner gear with confidence-building focus:
1. **Swim Goggles** 🥽 - UV-protective, adjustable fit
2. **Kickboard** 🏊 - Essential beginner gear for building confidence
3. **Short Training Fins** 🏊 - Help children feel comfortable moving through water
4. **Silicone Cap** 🏊 - Comfortable swim cap for all hair types
5. **Towel** 🧺 - Quick-dry microfiber towel
6. **Getting Started Guide** 📋 - Local pool info, lesson tips, and safety reminders

**Design Note**: 6 items display cleanly in 3-column grid (2 rows). Language emphasizes access and confidence over performance.

### Eligibility Requirements
Eligibility section uses supportive, non-judgmental language:
- **Green box**: "You May Qualify If" (welcoming)
- **Gray box**: "This Program May Not Be the Right Fit If" (neutral, not harsh red)
- **Disability language**: Changed from exclusionary to capacity-focused ("requires one-on-one or specialized instruction")
- **Reassurance footer**: Blue box encouraging uncertain families to apply anyway
- **Tone**: Partnership-friendly, reduces fear, maintains boundaries without sounding bureaucratic

## Emotional Impact Enhancements
The site now includes strategic elements for maximum credibility:
- **Founder's Note**: Personal message and photo to establish authentic mission
- **Specific Impact Stats**: 88% drowning risk reduction, $200+ average cost barriers
- **Human Moments**: Candid photos of real people (children, volunteers, founder)
- **Reassurance Copy**: "No documentation required. No hidden costs. We'll walk you through every step."
- **Urgency Indicators**: "We're currently preparing kits for our next local distribution!"
- **Human Response Time**: "We usually respond within 24 hours."
- **Impact Breakdown**: Clear visualization of donation impact ($25 = 1 kit, $50 = kit + guidance, $100 = distribution event)
- **Bridge Model Differentiation**: Positions Swim Access as additive, not competitive with traditional programs
- **Form UX Improvements**: Reassurance line, gentle question phrasing, optional email checkbox (unchecked by default)
- **Confirmation Page**: Clear 3-step timeline after form submission (Review → Email → Get Kit & Start Swimming)

## Trust & Legal Pages
Professional privacy and terms pages build parent trust:
- **Privacy Policy** (`/privacy`): Clear data handling, email communication, children's privacy protection
- **Terms of Service** (`/terms`): Program scope, safety disclaimer, eligibility, what Swim Access provides vs. doesn't
- **Newsletter Messaging**: Footer includes "Occasional updates, impact stories, no spam" to set expectations
- **Footer Links**: Privacy and Terms linked in footer for easy access
- **Tone**: Human, reassuring, non-defensive—builds trust without sounding legal-heavy

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
The app is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions about this project, please contact the development team.
