# Epic 4: Lead Generation

**Priority:** P1 (Should Have)
**Phase:** 3
**Estimated Duration:** 1 week

---

## Description

Implement interactive tools and forms to capture, qualify, and convert website visitors into paying clients. Focus on reducing friction in the inquiry process while gathering relevant information to provide personalized service.

---

## Goals

- Increase qualified lead conversion by 30%
- Reduce initial response time to < 2 hours
- Collect client preferences upfront for personalized follow-up
- Make booking process fun and engaging
- Enable 24/7 lead capture

---

## User Stories

### US-4.1: Planning Style Quiz
**As a** potential client
**I want** a fun interactive quiz to determine my planning needs
**So that** I can get personalized recommendations and pricing

**Acceptance Criteria:**
- [ ] `app/quiz/page.tsx` created
- [ ] Multi-step questionnaire (8-10 questions)
- [ ] Progress bar showing completion
- [ ] Question types: multiple choice, slider, image select
- [ ] Smooth transitions between questions
- [ ] Results page with recommended service tier
- [ ] Pricing estimate based on answers
- [ ] CTA: "Book Consultation" with pre-filled form
- [ ] Save results to lead database
- [ ] Email results to user (optional)

**Sample Questions:**
1. What type of event are you planning?
2. How many guests?
3. What's your timeline? (< 6 months, 6-12 months, 12+ months)
4. Budget range?
5. How involved do you want to be? (hands-on ↔ hands-off)
6. Style preference? (show images: rustic, modern, elegant, boho)
7. Most important elements? (decor, food, entertainment, etc.)
8. Biggest planning concern? (budget, time, coordination)

**Results:**
- **Full Service Planning** - "You want a stress-free experience with expert guidance"
- **Wedding Management** - "You love planning but need help executing"
- **Elopement Package** - "You prefer intimate and simple"

**Reference:** partygirlevents-v1 quiz implementation

---

### US-4.2: Quick Inquiry Form (Popup/Modal)
**As a** visitor in a hurry
**I want** a quick way to express interest without filling a long form
**So that** I can get on Stephanie's radar immediately

**Acceptance Criteria:**
- [ ] `components/features/QuickInquiryModal.tsx` created
- [ ] Trigger: "Quick Inquiry" button in header or floating CTA
- [ ] Fields: Name, Email, Event Type, Message (optional)
- [ ] Validation (email format, required fields)
- [ ] Submit sends email notification to Stephanie
- [ ] Success message: "Thanks! We'll reach out within 24 hours"
- [ ] Auto-close modal after submission
- [ ] Mobile-friendly (full-screen on mobile)
- [ ] Escape key or backdrop click to close

**Use Cases:**
- Visitor not ready for full contact form
- Mobile user with limited time
- "Just checking availability" inquiries

---

### US-4.3: Enhanced Contact Form
**As a** serious prospect
**I want** to provide detailed information about my event
**So that** Stephanie can provide a personalized response

**Acceptance Criteria:**
- [ ] Expand `app/contact/page.tsx` form (from Epic 2)
- [ ] Conditional fields based on event type
- [ ] Budget range slider with dollar amounts
- [ ] Preferred contact method (email, phone, text)
- [ ] Best time to reach you
- [ ] How did you hear about us? (dropdown)
- [ ] Upload inspiration images (optional)
- [ ] Calendar date picker for event date
- [ ] Save form progress to localStorage (auto-save)
- [ ] Recover abandoned forms (optional)

**Event Type Conditional Fields:**
- **Weddings:** Venue booked? (yes/no), Wedding party size
- **Proposals:** Surprise or together?, Proposal ideas
- **Social Events:** Occasion, Theme ideas

---

### US-4.4: Lead Data Management
**As a** site administrator
**I want** all form submissions stored and organized
**So that** I can track leads and follow up effectively

**Acceptance Criteria:**
- [ ] Database schema for leads (Supabase or Airtable)
- [ ] Store: contact info, event details, source, timestamp, status
- [ ] Email notification to Stephanie on new submission
- [ ] Lead status: New, Contacted, Qualified, Booked, Lost
- [ ] Admin dashboard to view leads (optional, future epic)
- [ ] Export leads to CSV
- [ ] Integration with CRM (optional: HubSpot, Salesforce)

**Data Schema:**
```typescript
interface Lead {
  id: string
  createdAt: Date
  name: string
  email: string
  phone?: string
  eventType: 'wedding' | 'proposal' | 'mitzvah' | 'social'
  eventDate?: Date
  guestCount?: number
  budget?: string
  location?: string
  message?: string
  source: 'contact-form' | 'quick-inquiry' | 'quiz' | 'chat'
  status: 'new' | 'contacted' | 'qualified' | 'booked' | 'lost'
  quizResults?: object
}
```

---

### US-4.5: Availability Calendar
**As a** potential client
**I want** to see Stephanie's general availability
**So that** I know if my date is even possible

**Acceptance Criteria:**
- [ ] `components/features/AvailabilityCalendar.tsx` created
- [ ] Calendar view showing booked dates (grayed out)
- [ ] Available dates highlighted
- [ ] "Inquire About This Date" CTA for available dates
- [ ] Monthly view with navigation
- [ ] Automatically block past dates
- [ ] Mobile-friendly date picker
- [ ] Sync with Google Calendar (optional)

**Privacy:**
- Don't show client names, just "Booked" status
- Show general availability, not detailed schedule

**Libraries:**
- react-day-picker
- react-calendar
- Custom implementation

---

### US-4.6: Email Notifications
**As a** business owner (Stephanie)
**I want** instant email notifications for new leads
**So that** I can respond quickly and not miss opportunities

**Acceptance Criteria:**
- [ ] Email service configured (SendGrid or Resend)
- [ ] Template for new lead notification
- [ ] Include all form data in email
- [ ] Link to respond directly (mailto: or CRM)
- [ ] SMS notification for high-priority leads (optional)
- [ ] Daily digest of leads (optional)

**Email Template:**
```
Subject: 🎉 New Lead: [Name] - [Event Type]

Party Girl Events has a new inquiry!

Name: [Name]
Email: [Email]
Phone: [Phone]
Event: [Event Type]
Date: [Event Date]
Guests: [Guest Count]
Budget: [Budget]

Message:
[Message]

Source: [Form Type]
Timestamp: [Date/Time]

[Reply to Lead Button]
```

---

### US-4.7: Auto-Responder Email
**As a** potential client who just submitted a form
**I want** an immediate confirmation email
**So that** I know my inquiry was received

**Acceptance Criteria:**
- [ ] Auto-reply sent immediately after form submission
- [ ] Personalized with client's name
- [ ] Set expectations: "We'll respond within 24 hours"
- [ ] Include next steps
- [ ] Link to FAQs or services page
- [ ] Stephanie's contact info
- [ ] Brand-consistent email design (HTML template)

**Email Template:**
```
Subject: We received your inquiry! 🎉

Hi [Name],

Thank you for reaching out to Party Girl Events! We're excited to learn more about your [Event Type].

What's Next?
- Stephanie will personally review your inquiry
- Expect a response within 24 hours (usually much sooner!)
- In the meantime, check out our portfolio for inspiration

Questions? Call or text: (970) 306-3381

Cheers,
Stephanie Fleck
Party Girl Events
```

---

### US-4.8: Lead Scoring
**As a** business owner
**I want** leads automatically prioritized by quality
**So that** I can focus on the most promising inquiries

**Acceptance Criteria:**
- [ ] Scoring algorithm based on:
  - Event date (sooner = higher score)
  - Budget (higher = higher score)
  - Guest count (larger = higher score)
  - Completeness of form (more info = higher score)
  - Referral source (past client referral = higher score)
- [ ] Score displayed in lead dashboard (0-100)
- [ ] Auto-tag leads: Hot, Warm, Cold
- [ ] Sort leads by score by default
- [ ] Highlight "Hot Leads" in email notifications

**Scoring Example:**
- Budget > $10k: +30 points
- Event date < 6 months: +20 points
- Guest count > 100: +15 points
- Referred by past client: +25 points
- Full form completed: +10 points

---

## Dependencies

### Technical
- **Blocks:** Epic 1 (Foundation & Infrastructure) - needs form components
- **Blocks:** Epic 2 (Core Website Pages) - needs contact page

### External
- Email service (SendGrid or Resend)
- Database (Supabase, Airtable, or Firebase)
- Calendar API (Google Calendar, optional)

---

## Definition of Done

- [ ] All user stories completed and acceptance criteria met
- [ ] Forms validated and error-free
- [ ] Email notifications working (test with real email)
- [ ] Lead data stored securely and accessibly
- [ ] Quiz results accurate and helpful
- [ ] Mobile forms tested and optimized
- [ ] GDPR/privacy compliant (privacy policy linked)
- [ ] Spam protection implemented (honeypot or reCAPTCHA)
- [ ] Conversion tracking set up (Google Analytics events)

---

## Technical Debt / Future Improvements

- Integrate with Zapier for CRM sync
- Add SMS notifications (Twilio)
- Build full admin dashboard for lead management
- A/B test different quiz questions and flows
- Add calendar booking integration (Calendly)
- Implement abandoned form recovery emails
- Add live chat widget (from Epic 6)

---

## Related Epics

- **Blocked By:** Epic 1, Epic 2
- **Related:** Epic 6 (AI Features) - Chat assistant as lead gen tool
- **Related:** Epic 5 (Client Portal) - Leads convert to client accounts

---

## References

- partygirlevents-v1: Quiz implementation
- westlake-hoa: Form validation patterns
- research/ADJACENT_INDUSTRIES_RESEARCH.md: Group polling inspiration
