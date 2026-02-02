# Epic 5: Client Portal

**Priority:** P2 (Nice to Have)
**Phase:** 3
**Estimated Duration:** 2 weeks

---

## Description

Create a secure client portal where booked clients can view their event details, itinerary, vendor contacts, payment status, and collaborate with Stephanie. Inspired by modern group coordination apps like Batch and Bridesquad, this portal reduces email chaos and keeps everyone on the same page.

---

## Goals

- Reduce client email volume by 40%
- Provide 24/7 access to event details
- Streamline vendor communication
- Enable real-time itinerary updates
- Improve client satisfaction and referrals

---

## User Stories

### US-5.1: Client Authentication
**As a** booked client
**I want** secure access to my event portal
**So that** I can view my private event details anytime

**Acceptance Criteria:**
- [ ] Authentication system (NextAuth.js or Clerk)
- [ ] Email/password login
- [ ] Magic link login (passwordless option)
- [ ] "Forgot password" flow
- [ ] Email verification on signup
- [ ] Secure session management (JWT)
- [ ] Logout functionality
- [ ] Password requirements (8+ chars, mix of types)

**Routes:**
- `/portal/login` - Login page
- `/portal/signup` - Create account (invitation only)
- `/portal/forgot-password` - Password reset

**Security:**
- HTTPS only
- Secure cookies
- CSRF protection
- Rate limiting on login attempts

---

### US-5.2: Client Dashboard
**As a** logged-in client
**I want** a dashboard overview of my event
**So that** I can quickly see status and next steps

**Acceptance Criteria:**
- [ ] `app/portal/dashboard/page.tsx` created
- [ ] Welcome message with client name
- [ ] Event countdown timer (days until event)
- [ ] Event status: Planning, Confirmed, Complete
- [ ] Quick stats: Days left, Confirmed vendors, Budget status
- [ ] Next steps checklist (3-5 upcoming tasks)
- [ ] Recent updates feed (Stephanie's notes, new vendors)
- [ ] Quick links: Itinerary, Vendors, Payments, Messages

**Dashboard Sections:**
1. **Event Overview** - Date, location, guest count
2. **Progress** - Visual progress bar (planning milestones)
3. **To-Do List** - Client action items
4. **Notifications** - Unread updates
5. **Quick Actions** - View itinerary, message Stephanie

---

### US-5.3: Shared Itinerary
**As a** client and their guests
**I want** a real-time, shareable event itinerary
**So that** everyone knows the schedule and logistics

**Acceptance Criteria:**
- [ ] `app/portal/itinerary/page.tsx` created
- [ ] Timeline view of event schedule
- [ ] Each item: time, activity, location, notes
- [ ] Map view showing all locations
- [ ] "Add to Calendar" button (generates .ics file)
- [ ] Shareable link (public view, no login required)
- [ ] Print-friendly version
- [ ] Weather forecast for event date (optional)
- [ ] Real-time updates (if Stephanie changes schedule)

**Itinerary Item Schema:**
```typescript
interface ItineraryItem {
  id: string
  time: string // "2:00 PM"
  title: string // "Ceremony"
  location: string
  address?: string
  duration?: number // minutes
  notes?: string
  contact?: {
    name: string
    phone: string
  }
}
```

**Features:**
- Drag to reorder (admin only)
- Export to PDF
- Send via email or text
- Mobile-optimized view

**Reference:** Batch/Bridesquad shared itinerary patterns from research

---

### US-5.4: Vendor Directory
**As a** client
**I want** all my vendor contacts in one place
**So that** I don't have to search through emails

**Acceptance Criteria:**
- [ ] `app/portal/vendors/page.tsx` created
- [ ] List of all vendors with categories
- [ ] Categories: Venue, Catering, Florals, Photography, Videography, DJ/Band, Hair/Makeup, Decor, Transportation, etc.
- [ ] Each vendor: name, contact, website, contract status, payment status
- [ ] Click-to-call phone numbers (mobile)
- [ ] Click-to-email
- [ ] Upload contract PDFs
- [ ] Notes section for each vendor
- [ ] Payment tracking per vendor

**Vendor Card:**
```typescript
interface Vendor {
  id: string
  category: string
  name: string
  contact: {
    name: string
    email: string
    phone: string
    website?: string
  }
  contractStatus: 'pending' | 'signed' | 'n/a'
  contractFile?: string // PDF URL
  paymentStatus: 'unpaid' | 'deposit' | 'paid'
  amountDue?: number
  notes?: string
}
```

---

### US-5.5: Payment Tracking
**As a** client
**I want** to see all payments and outstanding balances
**So that** I can manage my event budget

**Acceptance Criteria:**
- [ ] `app/portal/payments/page.tsx` created
- [ ] Total budget breakdown
- [ ] Payments by vendor
- [ ] Party Girl Events invoice(s)
- [ ] Payment status: Paid, Pending, Overdue
- [ ] Payment due dates
- [ ] Payment history log
- [ ] Download invoices (PDF)
- [ ] Venmo/CashApp QR codes for payment (from research)

**Budget Visualization:**
- Pie chart: spending by category
- Progress bar: budget used vs. total
- Alerts for upcoming payments

**Payment Integration (Optional Phase 2):**
- Stripe integration for credit card payments
- Venmo/CashApp deep links
- Payment reminders via email

**Reference:** Adjacent industries research - payment splitting features

---

### US-5.6: Document Library
**As a** client
**I want** all event-related documents in one place
**So that** I don't lose important files

**Acceptance Criteria:**
- [ ] `app/portal/documents/page.tsx` created
- [ ] Upload and store PDFs, images, spreadsheets
- [ ] Categories: Contracts, Invoices, Floor Plans, Inspiration, Misc
- [ ] File preview for images and PDFs
- [ ] Download files
- [ ] Upload restrictions (max 10MB per file, 100MB total)
- [ ] Organized by folder structure
- [ ] Search documents by filename
- [ ] Share individual files via link

**Storage:**
- Vercel Blob or Netlify Blobs
- AWS S3
- Cloudflare R2

---

### US-5.7: Messaging Center
**As a** client
**I want** to message Stephanie directly in the portal
**So that** all our communication is organized and searchable

**Acceptance Criteria:**
- [ ] `app/portal/messages/page.tsx` created
- [ ] Thread-based conversations
- [ ] Real-time messaging (WebSocket or polling)
- [ ] Message notifications (email and in-app)
- [ ] Attach files to messages
- [ ] Mark as read/unread
- [ ] Search message history
- [ ] Mobile-friendly (like texting)

**Features:**
- Typing indicator ("Stephanie is typing...")
- Read receipts (optional)
- Message reactions (thumbs up, heart)
- Pin important messages

**Technology:**
- Pusher or Ably for real-time
- Supabase Realtime
- Firebase Realtime Database

---

### US-5.8: Guest List Management (Optional)
**As a** wedding client
**I want** to manage my guest list and RSVPs
**So that** I can track headcount and meal choices

**Acceptance Criteria:**
- [ ] `app/portal/guests/page.tsx` created
- [ ] Add/edit/delete guests
- [ ] Guest details: name, email, phone, +1 allowed
- [ ] RSVP status: Invited, Accepted, Declined, No Response
- [ ] Meal choice (if applicable)
- [ ] Send RSVP reminders via email
- [ ] Export guest list to CSV
- [ ] Guest count summary by category (confirmed, pending)

**Public RSVP Page:**
- `/rsvp/[eventId]` - Public RSVP form
- Guests can RSVP without login
- Collect meal preferences
- Plus-one management

**Note:** This may be out of scope for MVP; many clients use external tools (The Knot, Zola, etc.)

---

### US-5.9: Planning Checklist
**As a** client
**I want** a guided checklist of planning tasks
**So that** I don't forget important steps

**Acceptance Criteria:**
- [ ] `app/portal/checklist/page.tsx` created
- [ ] Pre-populated checklist based on event type and timeline
- [ ] Timeline-based: 12 months out, 6 months, 3 months, 1 month, 1 week
- [ ] Check off completed tasks
- [ ] Add custom tasks
- [ ] Assign tasks to client or Stephanie
- [ ] Due dates with reminders
- [ ] Progress percentage

**Sample Checklist Items:**
- [ ] Book venue (12 months before)
- [ ] Send save-the-dates (6 months)
- [ ] Finalize guest list (3 months)
- [ ] Final walkthrough (1 week)

---

### US-5.10: Mobile App (PWA)
**As a** mobile user
**I want** the portal to work like a native app
**So that** I can access it easily on my phone

**Acceptance Criteria:**
- [ ] Progressive Web App (PWA) configured
- [ ] Install prompt on mobile
- [ ] App icon and splash screen
- [ ] Offline support (basic - cached pages)
- [ ] Push notifications (for new messages/updates)
- [ ] Add to home screen functionality
- [ ] Fast load times on mobile network

**PWA Features:**
- Service worker for caching
- Manifest.json with brand colors and icons
- Offline fallback page

---

### US-5.11: Sharing & Collaboration
**As a** bride
**I want** to invite my partner and wedding party to the portal
**So that** everyone can stay updated

**Acceptance Criteria:**
- [ ] Invite collaborators via email
- [ ] Role-based permissions:
  - **Owner** (client) - full access
  - **Collaborator** (partner/parent) - view and edit
  - **Guest** (wedding party) - view itinerary only
- [ ] Manage collaborators (add/remove)
- [ ] Activity log (who changed what)

**Roles:**
- Owner: Full access
- Collaborator: Can edit checklist, upload docs, message Stephanie
- Guest: View-only access to itinerary and vendor list

**Reference:** Bridesquad app sharing features from research

---

### US-5.12: Notifications System
**As a** client
**I want** to be notified of important updates
**So that** I don't miss deadlines or messages

**Acceptance Criteria:**
- [ ] In-app notification center
- [ ] Notification types: New message, Payment due, Checklist reminder, Itinerary change
- [ ] Email notifications (configurable preferences)
- [ ] SMS notifications (optional)
- [ ] Push notifications (PWA)
- [ ] Mark as read/unread
- [ ] Notification preferences page

**Notification Preferences:**
- [ ] Email notifications on/off
- [ ] SMS notifications on/off
- [ ] Push notifications on/off
- [ ] Frequency: Real-time, Daily digest, Weekly

---

## Dependencies

### Technical
- **Blocks:** Epic 1 (Foundation & Infrastructure)
- **Blocks:** Epic 2 (Core Website Pages)

### External
- Authentication service (NextAuth.js, Clerk, or Supabase Auth)
- Database (Supabase, Firebase, or PostgreSQL)
- Real-time messaging (Pusher, Ably, or Supabase Realtime)
- File storage (Vercel Blob, Netlify Blobs, or S3)
- Email service (SendGrid, Resend)
- SMS service (Twilio) - optional

---

## Definition of Done

- [ ] All user stories completed and acceptance criteria met
- [ ] Authentication secure and tested
- [ ] Client data isolated (can only see own event)
- [ ] Mobile-responsive portal
- [ ] Real-time updates working
- [ ] File uploads and downloads working
- [ ] Email notifications sent correctly
- [ ] Load tested (50+ concurrent users)
- [ ] Privacy policy and terms updated
- [ ] User testing completed with 2-3 real clients
- [ ] Admin documentation created for onboarding clients

---

## Technical Debt / Future Improvements

- Native iOS/Android apps
- Offline-first architecture
- Multi-event support (clients with multiple events)
- Client community/forum
- Integration with external tools (Zola, The Knot)
- White-label portal for other planners
- Analytics dashboard for Stephanie (client engagement metrics)

---

## Related Epics

- **Blocked By:** Epic 1, Epic 2
- **Related:** Epic 4 (Lead Generation) - Leads convert to portal users
- **Related:** Epic 7 (Group Coordination) - Portal enables group features

---

## References

- [research/ADJACENT_INDUSTRIES_RESEARCH.md](../../research/ADJACENT_INDUSTRIES_RESEARCH.md) - Batch, Bridesquad patterns
- Batch app: Shared itinerary and payment splitting
- Bridesquad: Collaborative planning tools
- SquadTrip: Group travel coordination
