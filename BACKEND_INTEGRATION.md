# Backend Integration Guide: Kit Request Forms

## Overview

The Get Kit form is currently set up for client-side form submission with a redirect to a confirmation page. To make this production-ready, you need to integrate with a backend service to:

1. **Store form data securely**
2. **Send confirmation emails to parents**
3. **Allow internal tracking and follow-up**
4. **Provide admin dashboard for status management**

---

## Current Setup

- **Form Page**: `app/get-kit/page.tsx`
- **Confirmation Page**: `app/kit-request-confirmation/page.tsx`
- **Form Action**: Currently logs to console and redirects
- **Data Storage**: None yet

---

## 🥇 RECOMMENDED: Formspree Integration

### Why Formspree?

- ✅ Free tier covers early-stage nonprofits
- ✅ Secure form handling (no exposed endpoints)
- ✅ Email notifications built-in
- ✅ Response tracking in dashboard
- ✅ CSV export for data management
- ✅ GDPR/privacy compliant
- ✅ No backend code required

### Setup Steps

#### 1. Sign Up at Formspree
- Go to [formspree.io](https://formspree.io)
- Sign up with your nonprofit email
- Create a new form project called "Kit Requests"
- Get your form ID (looks like: `abcdefgh`)

#### 2. Update Form Submission

In `app/get-kit/page.tsx`, replace the `handleSubmit` function:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/kit-request-confirmation");
    } else {
      console.error("Form submission failed");
      setIsSubmitting(false);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    setIsSubmitting(false);
  }
};
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

#### 3. Configure Formspree Email Notifications

In your Formspree dashboard:
- Set "Email notifications" to your nonprofit email
- You can customize the notification template
- Enable "Confirmation email to submitter" (optional—we recommend yes for parent reassurance)

#### 4. Set Up Response Tracking

Formspree automatically:
- Stores all submissions in your dashboard
- Allows you to mark responses as "Starred" or "Archived"
- Provides email notifications for new submissions
- Exports data to CSV

---

## 🥈 ALTERNATIVE: Airtable + Formspree

For slightly more power, connect Formspree to Airtable:

### Setup

1. Create an Airtable base with this structure:

```
[Kit Requests Table]
- Parent Name (Text)
- Parent Email (Email)
- Parent Phone (Phone)
- Child Name (Text)
- Child Age (Number)
- Address (Text)
- City (Text)
- State (Text)
- ZIP Code (Text)
- Why Swimming? (Long Text)
- How Heard (Single Select: School, Friend, Social, Community, Other)
- Agreed to Emails (Checkbox)
- Submission Date (Date)
- Status (Single Select: New, Contacted, Approved, Fulfilled, Referred)
- Internal Notes (Long Text)
- Review Date (Date)
```

2. In Formspree dashboard:
- Go to "Integrations"
- Connect to Airtable
- Map form fields to Airtable columns

3. Benefits:
   - Automatic database entry
   - Easy status tracking
   - Sortable and filterable
   - Can add automation later (e.g., auto-emails when status changes)
   - Team collaboration features

---

## 🏗️ Advanced: Custom Backend (Node.js + Vercel Database)

If you want full control and plan to scale:

### Architecture

```
Next.js Form → API Route (/api/submit-kit-request) 
  → Verify data 
  → Store in Postgres 
  → Send email via SendGrid 
  → Return confirmation
```

### Setup Overview

1. **Database**: Vercel Postgres (free tier available)
2. **Email**: SendGrid (free tier: 100 emails/day)
3. **API Route**: Create `/app/api/submit-kit-request/route.ts`

### Steps (Simplified)

1. **Create Vercel Postgres connection**
   ```bash
   vercel env pull  # Pull database credentials
   ```

2. **Create API route**
   ```tsx
   // app/api/submit-kit-request/route.ts
   export async function POST(req: Request) {
     const data = await req.json();
     
     // Validate data
     // Store in database
     // Send email
     // Return success
   }
   ```

3. **Update form to call API**
   ```tsx
   const response = await fetch("/api/submit-kit-request", {
     method: "POST",
     body: JSON.stringify(formData),
   });
   ```

### Pros & Cons

✅ **Pros**:
- Full control
- Scalable
- Can add complex logic
- Better for sensitive data

❌ **Cons**:
- Requires backend knowledge
- More maintenance
- Overkill for current scale

---

## 📊 Data Fields Being Collected

### Parent/Guardian Info
- Full Name (required)
- Email (required)
- Phone (required)
- Street Address (required)
- City (required)
- State (required)
- ZIP Code (required)

### Child Info
- Full Name (required)
- Age (required)

### Additional
- Why interested in swimming (required)
- How heard about us (required)
- Opted into email updates (optional)

### Internal Tracking (Not in form)
- Submission timestamp
- Status (New/Contacted/Approved/Fulfilled/Referred)
- Notes (for team)
- Review date
- Follow-up history

---

## 🔐 Privacy & Security Considerations

1. **Data Minimization**: We're only collecting what's necessary
2. **No Payment Info**: No credit cards or financial data
3. **Child Safety**: 
   - Minimum age check (8-12)
   - Parent/guardian contact only
   - No direct communication with children
4. **Data Retention**: 
   - Recommend deleting after 2 years if kit provided
   - Archive if referred elsewhere
5. **GDPR/CCPA Compliance**:
   - Add privacy policy link
   - Include data usage statement
   - Allow data deletion requests

---

## 📋 Recommended Implementation Path

### Phase 1 (Now - Week 1)
- [ ] Set up Formspree
- [ ] Test form submission end-to-end
- [ ] Launch with confidence
- [ ] Monitor submissions

### Phase 2 (Week 2-3)
- [ ] Add Airtable for status tracking
- [ ] Create simple admin dashboard
- [ ] Set up email templates

### Phase 3 (Month 2+)
- [ ] Consider custom backend if volume justifies it
- [ ] Integrate with CRM (HubSpot, etc.)
- [ ] Build parent portal for status checking

---

## 🧪 Testing Checklist

Before launch:

- [ ] Form submission works end-to-end
- [ ] Confirmation page appears after submit
- [ ] Email received by you (admin notification)
- [ ] Data appears in backend system
- [ ] Checkbox default is unchecked
- [ ] Button shows "Submitting..." state
- [ ] Form prevents double-submission
- [ ] All required fields validated
- [ ] Phone number format accepted
- [ ] Long text fields handle line breaks

---

## 📞 Support & Next Steps

**To implement Formspree** (easiest):
1. Sign up at formspree.io
2. Create new form, get form ID
3. Update `handleSubmit()` in `get-kit/page.tsx`
4. Test submission
5. Deploy

**Questions?** Check:
- Formspree docs: https://formspree.io/help/
- Airtable integration: https://www.airtable.com/
- For custom backend: Vercel docs at https://vercel.com/docs

---

## Current Form State & Next Steps

✅ **Done**:
- Form design & UX
- Reassurance messaging
- Confirmation page with clear timeline
- Form redirects to confirmation page

⏳ **TODO**:
- Pick backend service (recommend: Formspree)
- Integrate form submission endpoint
- Set up email notifications
- Create admin tracking workflow
- Test end-to-end

**Recommended Next Action**: Set up Formspree (takes ~10 minutes), then update the form endpoint.
