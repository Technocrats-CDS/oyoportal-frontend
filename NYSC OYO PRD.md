# **PRODUCT REQUIREMENTS DOCUMENT (PRD)**

## **Product Name: NYSC OYO Portal**

## **Product Type: Web-based Digital Portal (Headless CMS)**

## **Proposals: [NYSC OYO Proposal Drive](https://drive.google.com/drive/folders/1Tm2gCmCsGxd2gwJY7eKBygsT2GTnKeXL)**

# **1\. Executive Summary**

### **Product Vision**

OYO Portal is a centralized, state-level digital platform that provides official information, verified projects, and regulated business visibility through a single authoritative interface. It replaces fragmented WhatsApp groups, PDFs, and unmanaged websites with a structured, auditable, and sustainable system.

### **Who It’s For**

* **Primary users**: State program participants (e.g., corps members), state administrators

* **Secondary users**: Local businesses, NGOs, sponsors, general public

### **Why It Matters Now**

Current information flows are informal, unverifiable, and operationally expensive. Admins lack control, the public lacks trust, and there is no sustainability mechanism. This platform introduces clarity, governance, and automation with minimal technical overhead.

### **What Success Looks Like at Week 3**

* Public portal live with:

  * ≥20 published content items

  * ≥5 approved project listings

  * ≥1 paid business listing via Paystack

* Non-technical admins managing content independently

* Zero critical bugs post-launch

# **2\. Problem Statement & Current-State Analysis**

### **Current State**

* Announcements shared via WhatsApp broadcasts

* Projects tracked manually or not at all

* Businesses advertise informally without verification

* No expiry rules or enforcement

* No audit trail of admin actions

### **Key Problems**

| Stakeholder | Problem |
| :---- | :---- |
| Admins | Manual processes, no approvals, no accountability |
| Participants | Missed updates, low visibility for projects |
| Businesses | No official channel, no trust signal |
| Public | Conflicting or outdated information |

### **Quantified Inefficiencies**

* \~40% of announcements missed or misunderstood

* 5–10 admin hours/week spent clarifying information

* ₦0 recovered to support hosting or maintenance

# **3\. Target Personas**

### **Persona 1: State Admin Officer**

* Role: Content publishing & approvals

* Goals: Publish verified information quickly

* Pain Points: Tech anxiety, pressure to “manually fix” things

* Tech Comfort: Low–medium

* Success Criteria: Can approve/reject content in \<2 minutes

### **Persona 2: Program Participant**

* Role: Information consumer & project contributor

* Goals: Stay informed, showcase work

* Pain Points: Fragmented info, lack of recognition

* Tech Comfort: Medium–high

* Success Criteria: Finds updates in one place, submits projects easily

### **Persona 3: Local Business Owner**

* Role: Paid listing customer

* Goals: Visibility and legitimacy

* Pain Points: Informal ads, no official verification

* Tech Comfort: Medium

* Success Criteria: Pays once, gets listed, listing auto-expires

# **4\. Product Goals & Success Metrics**

### **Week 2–3 (Launch)**

* Portal live

* 100+ unique visitors

* ≥1 Paystack-confirmed payment

* Admin onboarding completed

### **Month 1**

* 500–1,000 visitors

* ≥10 paid business listings

* Weekly content publishing cadence

### **Month 3**

* ≥25 paid listings

* Platform covers hosting & email costs

* ≥40% reduction in admin manual work

### **Explicit Non-Goals**

* No mobile app

* No user comments or forums

* No advanced analytics or AI

* No multi-state support

# **5\. Scope Definition**

### **In Scope (MVP)**

* Headless CMS with admin panel

* Announcements & news

* Project showcase

* Paid business directory

* Admin roles & approvals

* Paystack integration (business listings only)

* Basic analytics (page views, listings count)

### **Explicitly Out of Scope**

* Chat or messaging

* Social feeds

* User-to-user interaction

* Complex reporting dashboards

# **6\. Functional Requirements**

### **Feature 1: Announcements & News (MVP)**

#### **Description** **Official announcements published by admins.**

User Stories

* Admin: “I can draft, review, and publish announcements.”

* Public: “I can view only verified announcements.”

Acceptance Criteria

* Draft / Published / Archived states

* Optional expiry date

* Category tagging

UI/UX

* List view (latest first)

* Detail page

* Mobile responsive

Edge Cases

* Expired announcements hidden automatically

Error Message

“This announcement is no longer active.”

Data Stored

* title, body, category, status, expiry\_date, author\_id

Permissions

* Editor: draft

* Admin: publish/archive

### **Feature 2: Project Portfolio (MVP)**

#### **Description** **Verified community or participant projects.**

**User Stories**

* Participant: “I submit my project.”

* Admin: “I approve before it goes live.”

Acceptance Criteria

* Approval mandatory

* Image upload (max 3 images, 2MB each)

Error Message

“Your project is pending approval.”

Data Stored

* title, description, images, owner\_name, status

### **Feature 3: Business Directory (PAID – MVP)**

Description  
Time-bound, paid business listings.

Pricing (Initial)

* 30 days – ₦5,000

* 90 days – ₦12,000

Payment Surface

* /businesses/submit

Workflow

1. Business submits listing

2. Selects duration

3. Redirected to Paystack checkout

4. Payment confirmed via webhook

5. Admin approves

6. Listing goes live

7. Auto-expires on paid\_until date

Acceptance Criteria

* No listing published without:

  * Successful Paystack confirmation

  * Admin approval

* Expired listings automatically hidden

Error Messages

* “Payment not confirmed.”

* “This listing has expired.”

Data Stored

* business\_name, category(type of business), contact\_info(email, phone number, address)

* payment\_reference

* paid\_until

* status (pending\_payment, paid\_pending\_approval, active, expired)

Permissions

* Business: submit & pay

* Admin: approve/reject

### **Feature 4: Admin CMS & Roles (MVP)**

Roles

* Super Admin

* Admin

* Editor

Capabilities

* Content CRUD

* Approval workflows

* User role management

Audit Log

* user\_id

* action

* entity

* timestamp

# **7\. Technical Architecture**

### **System Overview**

Browser ([Next.js](http://Next.js))  \-\>  REST API  \-\>  Strapi CMS (Admin Panel)  \-\>  PostgreSQL

Paystack / Email Service

### **Stack (Final)**

* Frontend: Next.js (SSR for SEO)

* CMS: Strapi (self-hosted)

* Database: PostgreSQL

* Auth: Strapi RBAC \+ JWT

* Hosting: VPS (DigitalOcean / Hetzner)

* Payments: Paystack

* Email: Postmark / Mailgun

### **Key Content Types**

* Announcement

* Project

* BusinessListing

* Payment

* AuditLog

# **8\. Security, Privacy & Compliance**

* HTTPS enforced

* RBAC enforced server-side

* Minimal PII collection

* NDPR-aligned privacy policy

* Immutable audit logs

* Paystack handles all card data (PCI compliance)

# **9\. Operational Considerations**

* Deployment: Git → Vercel

* Monitoring: BetterStack Uptime

* Admin Onboarding: 1-hour training

* Moderation: Mandatory approval queues

* Maintenance: Monthly updates & backups

# **10\. Week-by-Week Implementation Plan**

### **Week 1**

* Infrastructure setup

* Strapi configuration

* Content models & RBAC

### **Week 2**

* Frontend pages

* Paystack integration

* Approval workflows

### **Week 3/4**

* QA & security checks

* Admin training

* Launch

