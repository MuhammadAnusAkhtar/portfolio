"""Generates public/resume.pdf from the portfolio data (personal, skills, experience, projects)."""

from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    Image,
)

OUTPUT_PATH = "public/resume.pdf"
PROFILE_PHOTO_PATH = "public/profile.jpg"

DARK = HexColor("#1a1a1a")
GRAY = HexColor("#4a4a4a")
ACCENT = HexColor("#2563eb")
LIGHT_GRAY = HexColor("#888888")

styles = {
    "name": ParagraphStyle(
        "name", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=DARK, spaceAfter=2,
    ),
    "title": ParagraphStyle(
        "title", fontName="Helvetica", fontSize=12.5, leading=16, textColor=ACCENT, spaceAfter=6,
    ),
    "contact": ParagraphStyle(
        "contact", fontName="Helvetica", fontSize=9.5, leading=12, textColor=GRAY, spaceAfter=0,
    ),
    "section": ParagraphStyle(
        "section", fontName="Helvetica-Bold", fontSize=12, leading=14, textColor=ACCENT,
        spaceBefore=12, spaceAfter=4, letterSpacing=0.5,
    ),
    "body": ParagraphStyle(
        "body", fontName="Helvetica", fontSize=9.7, textColor=DARK, leading=13.5,
        alignment=TA_LEFT, spaceAfter=4,
    ),
    "job_title": ParagraphStyle(
        "job_title", fontName="Helvetica-Bold", fontSize=10.3, leading=13, textColor=DARK, spaceAfter=1,
    ),
    "job_meta": ParagraphStyle(
        "job_meta", fontName="Helvetica-Oblique", fontSize=9, leading=11, textColor=LIGHT_GRAY, spaceAfter=3,
    ),
    "bullet": ParagraphStyle(
        "bullet", fontName="Helvetica", fontSize=9.5, textColor=DARK, leading=13,
        leftIndent=12, spaceAfter=2,
    ),
    "skill_cat": ParagraphStyle(
        "skill_cat", fontName="Helvetica-Bold", fontSize=9.5, leading=13, textColor=DARK, spaceAfter=1,
    ),
    "skill_list": ParagraphStyle(
        "skill_list", fontName="Helvetica", fontSize=9.3, textColor=GRAY, leading=13, spaceAfter=6,
    ),
    "proj_title": ParagraphStyle(
        "proj_title", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=DARK, spaceAfter=1,
    ),
    "proj_tech": ParagraphStyle(
        "proj_tech", fontName="Helvetica-Oblique", fontSize=8.7, leading=11, textColor=ACCENT, spaceAfter=2,
    ),
}


def section_header(text):
    return [
        Paragraph(text.upper(), styles["section"]),
        HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=6, spaceBefore=0),
    ]


def build():
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=LETTER,
        topMargin=0.55 * inch,
        bottomMargin=0.5 * inch,
        leftMargin=0.65 * inch,
        rightMargin=0.65 * inch,
        title="Muhammad Anus Akhtar - Resume",
        author="Muhammad Anus Akhtar",
    )

    story = []

    # Header (photo + name/title/contact side by side)
    photo = Image(PROFILE_PHOTO_PATH, width=0.95 * inch, height=0.95 * inch)
    header_text = [
        Paragraph("Muhammad Anus Akhtar", styles["name"]),
        Paragraph("Senior Full Stack Website &amp; Mobile App Developer", styles["title"]),
        Paragraph(
            "anusakhtar786@gmail.com &nbsp;|&nbsp; 0343-1451403 &nbsp;|&nbsp; Pakistan",
            styles["contact"],
        ),
    ]
    header_table = Table(
        [[photo, header_text]],
        colWidths=[1.15 * inch, 5.7 * inch],
    )
    header_table.setStyle(
        TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ])
    )
    story.append(header_table)
    story.append(Spacer(1, 8))

    # Summary
    story += section_header("Summary")
    story.append(
        Paragraph(
            "Full Stack Developer with 4.5+ years building responsive websites, scalable web "
            "applications, and cross-platform mobile apps using React/Next.js, Node.js, and "
            "Flutter/Firebase. MPhil in Computer Science (completed February 2026), with 100+ "
            "projects delivered for 50+ clients across real estate, e-commerce, and business services.",
            styles["body"],
        )
    )

    # Experience
    story += section_header("Work Experience")
    story.append(Paragraph("Full Stack Web &amp; Mobile Developer", styles["job_title"]))
    story.append(Paragraph("Freelance / Contract &nbsp;&mdash;&nbsp; 2021 - Present", styles["job_meta"]))
    experience_bullets = [
        "Built and shipped 100+ web and mobile projects across real estate, e-commerce, and business service industries",
        "Architected scalable full-stack applications (React/Next.js + Node.js) with admin dashboards and analytics",
        "Delivered cross-platform mobile and desktop apps using Flutter, Firebase, and local AI tooling for business use cases",
        "Led feature development end-to-end: API design, database architecture, and UI/UX implementation",
    ]
    for b in experience_bullets:
        story.append(Paragraph(f"&bull;&nbsp; {b}", styles["bullet"]))
    story.append(Spacer(1, 4))

    # Education
    story += section_header("Education")
    story.append(Paragraph("MPhil, Computer Science", styles["job_title"]))
    story.append(Paragraph("Minhaj University Lahore &nbsp;&mdash;&nbsp; Completed February 2026", styles["job_meta"]))

    # Skills
    story += section_header("Skills")
    skill_groups = [
        ("Frontend", "HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap"),
        ("Backend", "Node.js, Express.js, PHP, Laravel, REST APIs"),
        ("Mobile", "Flutter, Dart, Android, Firebase"),
        ("Database", "MySQL, PostgreSQL, MongoDB, Firebase Firestore"),
        ("Tools", "Git, GitHub, VS Code, Figma, Postman, Android Studio"),
    ]
    skill_rows = []
    for cat, items in skill_groups:
        skill_rows.append([
            Paragraph(cat, styles["skill_cat"]),
            Paragraph(items, styles["skill_list"]),
        ])
    skill_table = Table(skill_rows, colWidths=[1.05 * inch, 5.8 * inch])
    skill_table.setStyle(
        TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 1),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ])
    )
    story.append(skill_table)

    # Projects (all)
    story += section_header("Projects")
    projects = [
        {
            "name": "Deal One Real Estate",
            "tech": "Next.js, Node.js, MongoDB",
            "desc": "Property listing platform for Pakistan's real estate market with location/society search, real-time file-rate tracking, and WhatsApp inquiries.",
            "link": "dealonerealestate.vercel.app",
        },
        {
            "name": "ShopIT",
            "tech": "React, Node.js, MongoDB",
            "desc": "Full-featured e-commerce app with storefront, cart-to-checkout flow, role-based auth, and an admin dashboard with sales analytics.",
            "link": "shopit-frontend-sage.vercel.app",
        },
        {
            "name": "Lifetime Auto Repair",
            "tech": "React, Tailwind CSS",
            "desc": "Business website for a car AC and auto repair shop in Abu Dhabi with service listings, testimonials, and WhatsApp booking.",
            "link": "aquamarine-bombolone-25d9e2.netlify.app",
        },
        {
            "name": "Nova AI Assistant",
            "tech": "Flutter, Dart, Python, FastAPI, Ollama",
            "desc": "Local-first Windows AI assistant with wake-word voice control and a secure automation bridge to open apps and send WhatsApp messages.",
            "link": "github.com/MuhammadAnusAkhtar/nova-ai-assistant",
        },
        {
            "name": "EstateFinder — UI/UX Concept",
            "tech": "UI/UX Design, Mobile App Design",
            "desc": "Self-directed mobile UI/UX concept for a real estate discovery app, covering search, listings, property detail, and profile screens.",
            "link": None,
        },
    ]
    for p in projects:
        title = p["name"]
        if p.get("link"):
            title += f" &nbsp;<font color='#888888' size=8>({p['link']})</font>"
        story.append(Paragraph(title, styles["proj_title"]))
        story.append(Paragraph(p["tech"], styles["proj_tech"]))
        story.append(Paragraph(p["desc"], styles["body"]))
        story.append(Spacer(1, 3))

    doc.build(story)
    print(f"Resume written to {OUTPUT_PATH}")


if __name__ == "__main__":
    build()
