# Epic 6: AI Features

**Priority:** P2 (Nice to Have)
**Phase:** 3 (Phase 1), 4 (Phase 2)
**Estimated Duration:** 2 weeks

---

## Description

Implement AI-powered features to provide 24/7 support, personalized recommendations, and creative visualization tools. "Stella" the AI assistant answers questions, qualifies leads, and provides planning guidance, while the Vision Board Generator helps clients visualize their event aesthetic.

---

## Goals

- Provide 24/7 instant responses to visitor questions
- Qualify leads automatically before human handoff
- Reduce Stephanie's repetitive inquiry workload by 50%
- Generate visual inspiration to help clients communicate their vision
- Differentiate from competitors with cutting-edge technology

---

## User Stories

### US-6.1: AI Chat Widget Foundation
**As a** website visitor
**I want** an always-available chat assistant
**So that** I can get answers to my questions immediately

**Acceptance Criteria:**
- [ ] `components/features/ChatWidget.tsx` created
- [ ] Floating chat button (bottom right)
- [ ] Click opens chat interface
- [ ] Minimize/maximize functionality
- [ ] Unread message indicator
- [ ] Mobile-responsive (full screen on mobile)
- [ ] Smooth animations (slide up)
- [ ] Accessible (keyboard navigation, ARIA)
- [ ] Persistent across page navigation

**Design:**
- Avatar: "Stella" with champagne gold accent
- Chat bubble style matching brand
- Typing indicator (animated dots)
- Timestamp on messages

**Reference:** partygirlevents-v1 ChatWidget component

---

### US-6.2: Chat Backend & AI Integration
**As a** developer
**I want** AI integration with OpenAI or Anthropic
**So that** the chat can provide intelligent responses

**Acceptance Criteria:**
- [ ] API route: `/api/chat` for message handling
- [ ] OpenAI GPT-4 or Anthropic Claude integration
- [ ] System prompt defines Stella's personality and knowledge
- [ ] Context window maintains conversation history
- [ ] Streaming responses (tokens appear in real-time)
- [ ] Rate limiting to prevent abuse
- [ ] Error handling (AI unavailable fallback)
- [ ] Cost monitoring (log token usage)

**System Prompt:**
```
You are Stella, the AI assistant for Party Girl Events, a luxury wedding and event planning company in Vail, Colorado, owned by Stephanie Fleck.

Your personality:
- Warm, enthusiastic, and helpful
- Professional but approachable
- Knowledgeable about wedding and event planning
- Familiar with Vail and Colorado mountain venues

Your knowledge base:
- Services: Full Service Wedding Planning ($95/person, $7,500 min), Wedding Management ($3,000-$4,500), Elopements ($2,500-$4,500), Proposals ($1,500-$1,800)
- Service areas: Vail, Beaver Creek, Breckenridge, Keystone, Aspen
- Owner: Stephanie Fleck (8 years Ritz-Carlton, founded 2015)
- Specialties: Mountain weddings, proposals, Bar/Bat Mitzvahs, social events

Your goals:
- Answer questions about services and pricing
- Help visitors determine which service is right for them
- Collect basic information (name, event type, date, guest count)
- Encourage booking a consultation
- Handoff to Stephanie for detailed planning

Important:
- If asked about specific availability, say "Let me connect you with Stephanie to check her calendar"
- Don't make promises about specific vendors or venues
- Be honest if you don't know something
- Always end by offering to connect them with Stephanie
```

---

### US-6.3: Conversation Intelligence
**As a** business owner
**I want** the AI to recognize when to hand off to a human
**So that** complex questions get expert attention

**Acceptance Criteria:**
- [ ] Detect high-intent signals (budget questions, date inquiries)
- [ ] Trigger lead capture form in chat
- [ ] "Talk to Stephanie" button always available
- [ ] Auto-escalation if user is frustrated (negative sentiment)
- [ ] Save full conversation to lead record
- [ ] Flag high-priority conversations for immediate follow-up

**Handoff Triggers:**
- User mentions specific date or budget
- User asks about availability
- User expresses urgency ("wedding is in 3 months")
- User asks complex custom questions
- User seems confused or frustrated

---

### US-6.4: Lead Capture in Chat
**As a** qualified prospect
**I want** to schedule a consultation directly in the chat
**So that** I don't have to fill out a separate form

**Acceptance Criteria:**
- [ ] Stella asks for name, email, event type during conversation
- [ ] Natural conversation flow (not form-like)
- [ ] Option to skip questions ("I'd rather not say")
- [ ] Confirmation message with next steps
- [ ] Create lead record in database
- [ ] Email notification to Stephanie
- [ ] Auto-responder email to user

**Conversation Flow:**
```
Stella: "I'd love to help you plan your event! Can I get your name?"
User: "Sarah"
Stella: "Nice to meet you, Sarah! What type of event are you planning?"
User: "A wedding"
Stella: "How exciting! Do you have a date in mind?"
User: "Next summer, maybe June 2027"
Stella: "Perfect! What's the best email to send you more info?"
User: "sarah@example.com"
Stella: "Got it! Stephanie will reach out within 24 hours. In the meantime, want to see our wedding portfolio?"
```

---

### US-6.5: Knowledge Base Integration
**As a** visitor with specific questions
**I want** the AI to have accurate, up-to-date information
**So that** I can trust the responses

**Acceptance Criteria:**
- [ ] Knowledge base file with FAQs and service details
- [ ] RAG (Retrieval-Augmented Generation) implementation
- [ ] Pull information from scraped site content
- [ ] Embed and search capabilities
- [ ] Update knowledge base without code changes
- [ ] Source citations ("According to our services page...")

**Knowledge Base Topics:**
- Service descriptions and pricing
- Planning timelines (how far in advance to book)
- Vail venue recommendations
- Payment and contract terms
- What's included in each package
- Stephanie's background and credentials
- Service area coverage

**Technology:**
- Pinecone or Supabase Vector for embeddings
- Langchain for RAG pipeline
- Markdown files for knowledge base content

---

### US-6.6: Chat Analytics
**As a** business owner
**I want** insights into chat conversations
**So that** I can improve the AI and understand visitor needs

**Acceptance Criteria:**
- [ ] Track metrics: total chats, avg chat length, handoff rate, lead capture rate
- [ ] Common questions dashboard
- [ ] Sentiment analysis (positive, neutral, negative)
- [ ] Topics discussed (pricing, venues, availability)
- [ ] Conversion rate (chat → lead)
- [ ] A/B test different prompts/personalities

**Metrics Dashboard:**
- Daily/weekly chat volume
- Most asked questions
- Conversion funnel: visitor → chat → lead → booked
- User satisfaction (thumbs up/down on responses)

---

### US-6.7: Vision Board Generator - Upload & Analysis
**As a** client planning my event
**I want** to upload inspiration images
**So that** AI can analyze my style preferences

**Acceptance Criteria:**
- [ ] `app/vision-board/page.tsx` created
- [ ] Upload 3-10 inspiration images (Pinterest, Instagram saves)
- [ ] Image analysis with OpenAI Vision API
- [ ] Extract style attributes: color palette, vibe (rustic, modern, elegant), elements (florals, lighting, etc.)
- [ ] Display analysis results
- [ ] Save to user profile/lead record
- [ ] Loading state during analysis (30-60 seconds)

**Analysis Output:**
```typescript
interface StyleAnalysis {
  colorPalette: string[] // ["#C9A227", "#9CAF88", "#FFFAFA"]
  vibe: string[] // ["elegant", "romantic", "mountain-chic"]
  elements: string[] // ["string lights", "wildflowers", "wood accents"]
  overallTheme: string // "Elegant Mountain Wedding with Rustic Touches"
  recommendations: string[] // Vendor/decor suggestions
}
```

**Reference:** PartyPilotAI from research - 30-second visualization

---

### US-6.8: Vision Board Generator - Mood Board Creation
**As a** client
**I want** AI to generate a cohesive mood board
**So that** I can share my vision with Stephanie and vendors

**Acceptance Criteria:**
- [ ] Generate mood board with analyzed style
- [ ] Layout: 3x3 or 2x4 grid of images
- [ ] Color palette swatch display
- [ ] Style keywords overlay
- [ ] "Your Event Vibe" headline
- [ ] Download as PNG or PDF
- [ ] Share via link
- [ ] Option to regenerate or refine

**Image Sources:**
- User's uploaded images
- AI-generated images (DALL-E, Midjourney via API)
- Stock photo APIs (Unsplash, Pexels) matching style

---

### US-6.9: AI Recommendations
**As a** client
**I want** personalized vendor and venue recommendations
**So that** I can make informed decisions

**Acceptance Criteria:**
- [ ] Based on vision board analysis and quiz results
- [ ] Recommend 3-5 venues matching style and budget
- [ ] Recommend vendors (florists, photographers, etc.)
- [ ] Explanation of why each recommendation fits
- [ ] Link to vendor websites/portfolios
- [ ] "Save" or "Not Interested" feedback
- [ ] Learn from client preferences

**Recommendation Format:**
```
Venue: The Arrabelle at Vail Square
Why: Your elegant, romantic style pairs perfectly with The Arrabelle's luxurious ballroom. The champagne gold accents match your color palette.
Capacity: Up to 200 guests
Price Range: $$$
[View Venue] [Save]
```

**Data Sources:**
- Vendor database (from scraped site partner list)
- Manual curation by Stephanie
- Public venue/vendor data

---

## Dependencies

### Technical
- **Blocks:** Epic 1 (Foundation & Infrastructure)
- **Related:** Epic 4 (Lead Generation) - Chat generates leads

### External
- OpenAI API key (GPT-4 + Vision)
- OR Anthropic API key (Claude)
- Vector database (Pinecone, Supabase, or Weaviate)
- Image storage (for vision board uploads)
- Rate limiting service

### Content
- Knowledge base content (FAQs, service details)
- Vendor/venue database

---

## Definition of Done

- [ ] All user stories completed and acceptance criteria met
- [ ] Chat widget functional on all pages
- [ ] AI responses accurate and helpful (tested with 20+ questions)
- [ ] Handoff to human works smoothly
- [ ] Lead capture integrated with database
- [ ] Vision board generates successfully
- [ ] API costs monitored and within budget (<$100/month estimated)
- [ ] Rate limiting prevents abuse
- [ ] Error handling graceful (fallback messages)
- [ ] Privacy policy updated (AI usage disclosed)

---

## Cost Estimates

### OpenAI Pricing (estimated monthly):
- Chat (GPT-4): ~1,000 conversations × $0.10 = $100
- Vision (GPT-4V): ~100 vision boards × $0.50 = $50
- **Total:** ~$150/month (will decrease with scale)

### Anthropic Pricing (alternative):
- Claude Sonnet: ~1,000 conversations × $0.08 = $80
- Claude with vision: Similar to OpenAI
- **Total:** ~$130/month

**Cost Optimization:**
- Use GPT-3.5-turbo for simple queries ($0.01/1K tokens)
- Cache common questions and responses
- Implement conversation length limits

---

## Technical Debt / Future Improvements

- Multi-language support (Spanish)
- Voice interface (speak to Stella)
- SMS chat (text Stella your questions)
- Integration with Stephanie's calendar (book consultation in chat)
- Sentiment-based response adjustment
- Automated follow-up if chat abandoned
- Stella "personality modes" (professional ↔ casual)

---

## Related Epics

- **Blocked By:** Epic 1
- **Related:** Epic 4 (Lead Generation) - Chat is lead gen tool
- **Related:** Epic 5 (Client Portal) - Chat available in portal

---

## References

- [TECHNICAL_STRATEGY.md](../../TECHNICAL_STRATEGY.md) - AI integration plan
- [research/ADJACENT_INDUSTRIES_RESEARCH.md](../../research/ADJACENT_INDUSTRIES_RESEARCH.md) - AI party planning tools
- partygirlevents-v1: ChatWidget component
- PartyPilotAI: 30-second visualization inspiration
- Jotform Party Planning Agent: Conversational AI
