# Epic 7: Group Coordination

**Priority:** P3 (Future Enhancement)
**Phase:** 4
**Estimated Duration:** 2 weeks

---

## Description

Implement modern group coordination features inspired by Batch, Bridesquad, and SquadTrip to help clients plan events collaboratively with their group. Includes polling, payment splitting, RSVP management, and real-time notifications - eliminating the chaos of group text threads and scattered emails.

---

## Goals

- Reduce group coordination friction by 60%
- Enable democratic decision-making through polls
- Simplify payment collection and splitting
- Keep all event participants informed in real-time
- Differentiate Party Girl Events from traditional planners

---

## User Stories

### US-7.1: Group Creation & Invitations
**As a** client
**I want** to invite my wedding party/event guests to collaborate
**So that** everyone can participate in planning

**Acceptance Criteria:**
- [ ] Create group from client portal
- [ ] Name group (e.g., "Sarah's Bachelorette Party", "Jake & Sarah Wedding")
- [ ] Send invitations via email or SMS
- [ ] Custom invitation message
- [ ] Track invitation status (sent, opened, joined)
- [ ] Resend invitations
- [ ] Public join link with password (optional)

**Invitation Email:**
```
Subject: You're invited to join [Event Name]!

Hi [Name],

[Client Name] has invited you to join the planning group for [Event Name]!

As a member, you'll be able to:
✓ View the event itinerary
✓ Vote on group decisions
✓ See event details and updates
✓ Contribute to planning

[Join Group Button]

Questions? Reply to this email or contact Party Girl Events.
```

**Roles:**
- **Organizer** (client) - Full control
- **Co-organizer** (wedding party, parents) - Can create polls, edit itinerary
- **Member** (guests) - View and vote only

---

### US-7.2: Group Dashboard
**As a** group member
**I want** a central place to see all group activity
**So that** I stay informed without email overload

**Acceptance Criteria:**
- [ ] `/portal/group/[id]/dashboard` page
- [ ] Event overview (date, location, headcount)
- [ ] Active polls section
- [ ] Recent updates feed
- [ ] Shared itinerary preview
- [ ] Member list (avatars/names)
- [ ] Upcoming deadlines (RSVP, payment, etc.)
- [ ] Quick actions: Vote, RSVP, Pay, Message

**Dashboard Sections:**
1. **Event Info** - Countdown, location, details
2. **Action Needed** - Polls awaiting vote, payments due
3. **Activity Feed** - Updates, new polls, new members
4. **Group Members** - Who's joined, who hasn't

**Reference:** Batch and Bridesquad group coordination from research

---

### US-7.3: Polling System
**As a** event organizer
**I want** to create polls for group decisions
**So that** everyone has a voice and we can decide democratically

**Acceptance Criteria:**
- [ ] Create poll from group dashboard
- [ ] Poll types: Single choice, Multiple choice, Yes/No, Rating (1-5 stars)
- [ ] Add poll question and options
- [ ] Optional: Add images to options (e.g., venue photos)
- [ ] Set deadline for voting
- [ ] Send notification to all members
- [ ] View real-time results (after voting or immediately)
- [ ] Lock poll when deadline passes
- [ ] Announce winner/results

**Poll Creation:**
```typescript
interface Poll {
  id: string
  question: string
  type: 'single' | 'multiple' | 'yesno' | 'rating'
  options: PollOption[]
  deadline?: Date
  resultsVisibility: 'after-vote' | 'live' | 'after-deadline'
  createdBy: string
  createdAt: Date
  votesCount: number
}

interface PollOption {
  id: string
  text: string
  image?: string
  votes: number
  voters: string[] // user IDs
}
```

**Poll Examples:**
- "Where should we have dinner on Friday night?"
- "What time works best for everyone?"
- "Which hotel should we book?" (with photos)
- "Do you prefer cocktail hour indoors or outdoors?"

**Reference:** BachPlace and Bridesquad poll features from research

---

### US-7.4: Voting Interface
**As a** group member
**I want** to vote on polls easily from my phone
**So that** I can participate in decisions on-the-go

**Acceptance Criteria:**
- [ ] View all active polls
- [ ] See poll question, options, deadline
- [ ] Vote with single tap/click
- [ ] See current results (if allowed)
- [ ] Change vote before deadline
- [ ] "Voted" indicator after submission
- [ ] Push notification when new poll created
- [ ] Email reminder for un-voted polls

**Mobile Experience:**
- Large tap targets for options
- Swipe between multiple polls
- Visual progress (voted on 2 of 3 polls)

---

### US-7.5: Payment Splitting & Tracking
**As a** event organizer
**I want** to collect and track payments from the group
**So that** I don't have to chase people down via text

**Acceptance Criteria:**
- [ ] Create expense (e.g., "Dinner at The Arrabelle")
- [ ] Enter total amount
- [ ] Split evenly or custom amounts per person
- [ ] Payment methods: Venmo, CashApp, Zelle, PayPal (links/QR codes)
- [ ] Track who has paid vs. who owes
- [ ] Send payment reminders
- [ ] Mark as paid manually (for cash/check)
- [ ] Payment history log

**Expense Schema:**
```typescript
interface Expense {
  id: string
  title: string
  totalAmount: number
  splitType: 'even' | 'custom'
  assignments: {
    userId: string
    amountDue: number
    amountPaid: number
    paidAt?: Date
    paymentMethod?: string
  }[]
  paymentOptions: {
    venmo?: string // @username
    cashapp?: string // $username
    zelle?: string // email/phone
    paypal?: string // paypal.me/username
  }
  dueDate?: Date
  createdBy: string
}
```

**Payment Dashboard:**
- Total collected vs. total due
- Who still owes (with amounts)
- Send reminder to individuals or everyone
- Generate Venmo/CashApp QR codes

**Reference:** Batch payment splitting and Bridesquad payment integration from research

---

### US-7.6: Venmo/CashApp Integration
**As a** group member who needs to pay
**I want** one-tap payment links
**So that** paying is effortless

**Acceptance Criteria:**
- [ ] Generate Venmo deep links (venmo://paycharge?txn=pay&recipients=...)
- [ ] Generate CashApp deep links (cash.app/$username)
- [ ] QR codes for each payment method
- [ ] Pre-filled amount and note
- [ ] "I Paid" confirmation button (manual)
- [ ] Auto-detect payment (via API, if available)

**Venmo Deep Link Example:**
```
venmo://paycharge?txn=pay&recipients=partygirlevents&amount=75&note=Bachelorette%20Dinner
```

**CashApp Deep Link Example:**
```
https://cash.app/$partygirlevents/75
```

**QR Code:**
- Display on expense detail page
- Scannable from mobile device
- Opens Venmo/CashApp with pre-filled info

**Note:** Venmo and CashApp don't have official APIs for auto-detection, so use manual confirmation

---

### US-7.7: Shared Activity Feed
**As a** group member
**I want** to see all group updates in one feed
**So that** I don't miss important information

**Acceptance Criteria:**
- [ ] Real-time activity feed
- [ ] Activity types: New poll, Poll results, Payment reminder, Itinerary update, New member, Announcement
- [ ] Filter by activity type
- [ ] Mark as read/unread
- [ ] Comment on activities (optional)
- [ ] "Pin" important updates to top

**Activity Item:**
```typescript
interface Activity {
  id: string
  type: 'poll' | 'payment' | 'itinerary' | 'announcement' | 'member'
  title: string
  description: string
  timestamp: Date
  actor: string // who triggered it
  actionUrl?: string // link to poll, payment, etc.
  isRead: boolean
}
```

**Example Activities:**
- "Sarah created a new poll: Where should we have dinner?"
- "Itinerary updated: Spa time moved to 2pm"
- "Payment reminder: Dinner at The Arrabelle due tomorrow"
- "Emily joined the group"

---

### US-7.8: Real-Time Notifications
**As a** group member
**I want** instant notifications for important updates
**So that** I can respond quickly

**Acceptance Criteria:**
- [ ] Push notifications (PWA)
- [ ] Email notifications (configurable)
- [ ] SMS notifications (optional, high priority only)
- [ ] In-app notification bell icon
- [ ] Notification preferences (what to be notified about)
- [ ] Notification channels: In-app, Email, Push, SMS

**Notification Types:**
- New poll created
- Poll deadline approaching (24 hours before)
- Payment due reminder
- Itinerary changed
- New message from organizer
- Someone commented on activity

**Preferences:**
- Real-time (as it happens)
- Daily digest (one email per day)
- Weekly summary
- Off (no notifications)

---

### US-7.9: Group Messaging
**As a** group member
**I want** to message the entire group
**So that** we can discuss plans without endless text threads

**Acceptance Criteria:**
- [ ] Group chat interface (like iMessage/WhatsApp)
- [ ] Send message to everyone
- [ ] Real-time delivery
- [ ] Read receipts (optional)
- [ ] Attach photos/files
- [ ] React to messages (emoji reactions)
- [ ] Pin important messages
- [ ] Search message history

**Features:**
- Typing indicator
- Message timestamps
- Inline image preview
- Link previews
- Mention users (@Sarah)

**Technology:**
- Pusher, Ably, or Supabase Realtime
- WebSocket for real-time delivery

**Reference:** Frienzy real-time coordination from research

---

### US-7.10: RSVP Management
**As a** event organizer
**I want** to track who's attending
**So that** I have an accurate headcount

**Acceptance Criteria:**
- [ ] Send RSVP request to group
- [ ] RSVP options: Attending, Not Attending, Maybe
- [ ] Add plus-one (if allowed)
- [ ] Dietary restrictions field
- [ ] Special requests/notes
- [ ] RSVP deadline
- [ ] Reminders for non-responders
- [ ] Export RSVP list

**RSVP Form:**
```typescript
interface RSVP {
  userId: string
  status: 'attending' | 'not-attending' | 'maybe'
  plusOne?: {
    name: string
    email?: string
  }
  dietaryRestrictions?: string
  notes?: string
  respondedAt: Date
}
```

**RSVP Summary:**
- X attending, Y declined, Z no response
- Total headcount (including plus-ones)
- Dietary restrictions summary

---

### US-7.11: Shared Photo Gallery
**As a** group member
**I want** to upload and share photos from the event
**So that** everyone can relive the memories

**Acceptance Criteria:**
- [ ] Upload photos during and after event
- [ ] Automatic gallery (all photos in one place)
- [ ] Organize by date/location (auto from EXIF)
- [ ] Tag people in photos
- [ ] Like and comment on photos
- [ ] Download all photos (zip file)
- [ ] Share gallery via link (public or private)

**Features:**
- Drag-and-drop upload
- Bulk upload (select multiple)
- Mobile camera integration (take and upload)
- Face detection for tagging (optional)
- AI categorization (group shots, venue, food, etc.)

**Storage:**
- Cloudinary or Uploadcare (image optimization)
- S3/R2 for long-term storage

---

## Dependencies

### Technical
- **Blocks:** Epic 1 (Foundation & Infrastructure)
- **Blocks:** Epic 5 (Client Portal) - Uses portal authentication

### External
- Real-time messaging (Pusher, Ably, Supabase Realtime)
- Push notification service (OneSignal or Firebase)
- SMS service (Twilio) - optional
- Image storage (Cloudinary, Uploadcare)
- Payment deep links (Venmo, CashApp - no official API)

---

## Definition of Done

- [ ] All user stories completed and acceptance criteria met
- [ ] Group creation and invitations working
- [ ] Polling system functional and tested
- [ ] Payment tracking accurate
- [ ] Real-time notifications delivered
- [ ] Mobile-optimized (primary use case)
- [ ] Load tested (50+ person group)
- [ ] User testing with real event (bachelorette party)
- [ ] Privacy settings (who can see what)
- [ ] GDPR compliant (data export/deletion)

---

## Technical Debt / Future Improvements

- Native mobile apps for better push notifications
- Calendar integration (Google Calendar, Apple Calendar)
- Integration with Batch/Bridesquad (white-label)
- AI suggestions for poll options
- Automatic expense splitting based on who attended what
- Voice polls (vote via voice message)
- Live video chat integration (Zoom/Meet)
- Post-event survey and feedback

---

## Related Epics

- **Blocked By:** Epic 1, Epic 5 (Client Portal)
- **Related:** Epic 6 (AI Features) - AI can suggest poll options
- **Related:** Epic 4 (Lead Generation) - Group features as selling point

---

## References

- [research/ADJACENT_INDUSTRIES_RESEARCH.md](../../research/ADJACENT_INDUSTRIES_RESEARCH.md) - Batch, Bridesquad, SquadTrip, Frienzy
- Batch: 5,000+ experiences, group itineraries, Venmo/CashApp payments
- Bridesquad: Shared itinerary, polls, direct payment integration
- BachPlace: Poll-based voting, expense tracking
- SquadTrip: Flexible payment plans, RSVP monitoring
- Frienzy: Real-time itinerary updates, suggestion voting
