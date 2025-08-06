# Content Management Guide for Resources Page

## Overview
The resources page uses a JSON-based content management system that allows you to easily add, edit, and organize articles, blogs, news, and case studies. All content is stored in `data/resources-data.json` and automatically displayed on the resources page.

## Adding New Articles

### Step 1: Edit the JSON File
Open `data/resources-data.json` and add a new object to the array. Here's the structure:

```json
{
  "id": 9,
  "title": "Your Article Title Here",
  "excerpt": "A compelling 1-2 sentence summary that appears on the main page",
  "content": "Full article content goes here. Use \\n for line breaks between paragraphs.",
  "type": "blog",
  "category": "Innovation",
  "tags": ["tag1", "tag2", "tag3"],
  "author": "Author Name",
  "authorBio": "Brief author description",
  "date": "2024-01-20",
  "readingTime": 8,
  "image": "assets/images/your-image.jpg",
  "featured": false,
  "seo": {
    "metaTitle": "SEO-optimized title (max 60 characters)",
    "metaDescription": "SEO description (max 160 characters)",
    "keywords": ["keyword1", "keyword2", "keyword3"]
  }
}
```

### Step 2: Field Explanations

- **id**: Unique number (increment from the last article)
- **title**: Main article title (appears as H1 on article page)
- **excerpt**: Brief summary for cards and featured sections
- **content**: Full article text (supports basic HTML if needed)
- **type**: One of: "blog", "news", "research", "case-study"
- **category**: Display category (e.g., "Innovation", "Environment", "Community")
- **tags**: Array of tags for filtering and SEO
- **author**: Author name
- **authorBio**: Brief author description
- **date**: Publication date in YYYY-MM-DD format
- **readingTime**: Estimated reading time in minutes
- **image**: Path to article image (recommended: 800x600px)
- **featured**: Set to `true` to make this the featured article
- **seo**: SEO optimization object

## Content Types

### Blog Posts (`"type": "blog"`)
- In-depth articles about innovations, processes, or insights
- Typically 800-2000 words
- Focus on educational content

### News (`"type": "news"`)
- Company announcements, industry news, market updates
- Typically 300-800 words
- Timely and newsworthy content

### Research (`"type": "research"`)
- Scientific studies, research findings, technical papers
- Typically 1000-3000 words
- Data-driven and technical content

### Case Studies (`"type": "case-study"`)
- Success stories, project outcomes, impact reports
- Typically 800-1500 words
- Results-focused with metrics

## Categories and Tags

### Available Categories
- Innovation
- Environment
- Community
- Agriculture
- Industry
- Technology
- Social Impact

### Tag System
Tags are automatically styled with colors. Available tags include:
- **sustainability** (green theme)
- **innovation** (blue theme)
- **agriculture** (yellow theme)
- **technology** (purple theme)
- **research** (pink theme)
- **industry** (cyan theme)
- **environment** (green theme)
- **community** (orange theme)

## SEO Optimization

### Best Practices

1. **Title Optimization**
   - Keep under 60 characters
   - Include primary keyword
   - Make it compelling and clickable

2. **Meta Description**
   - Keep under 160 characters
   - Include call-to-action
   - Summarize the article value

3. **Keywords**
   - Use 3-5 relevant keywords
   - Include long-tail keywords
   - Match user search intent

4. **Content Structure**
   - Use clear headings (H1, H2, H3)
   - Write in short paragraphs
   - Include relevant keywords naturally

### SEO-Friendly Content Tips

- **Headlines**: Use numbers, questions, or power words
- **First Paragraph**: Hook readers and include main keyword
- **Subheadings**: Break up content and include related keywords
- **Internal Links**: Reference other articles or pages
- **Call-to-Action**: End with next steps or engagement prompts

## Image Guidelines

### Image Requirements
- **Size**: Minimum 800x600px, recommended 1200x800px
- **Format**: JPG or WebP for best performance
- **Quality**: High quality but optimized for web
- **Alt Text**: Always include descriptive alt text

### Image Naming Convention
```
assets/images/article-topic-keyword.jpg
```

Examples:
- `bio-hybrid-technology.jpg`
- `carbon-sequestration-farming.jpg`
- `women-farmers-empowerment.jpg`

## Featured Articles

To make an article featured:
1. Set `"featured": true` in the JSON
2. Ensure only one article is featured at a time
3. Featured articles appear in the hero section

## Content Maintenance

### Regular Tasks
1. **Monthly Review**: Check for outdated information
2. **SEO Monitoring**: Update keywords based on performance
3. **Image Optimization**: Compress images for faster loading
4. **Link Checking**: Ensure all internal/external links work

### Performance Tracking
Monitor these metrics:
- Page views per article
- Time spent reading
- Social shares
- Search engine rankings
- User engagement (comments, likes)

## Quick Checklist for New Articles

- [ ] Unique ID assigned
- [ ] Compelling title (under 60 chars)
- [ ] Engaging excerpt (1-2 sentences)
- [ ] Full content written and proofread
- [ ] Appropriate type and category selected
- [ ] 3-5 relevant tags added
- [ ] Author info completed
- [ ] Realistic reading time estimated
- [ ] High-quality image added and optimized
- [ ] SEO fields completed
- [ ] JSON syntax validated
- [ ] Content reviewed for accuracy
- [ ] Published date set correctly

## Troubleshooting

### Common Issues

1. **Article not appearing**: Check JSON syntax with a validator
2. **Images not loading**: Verify image path and file exists
3. **Broken layout**: Ensure all required fields are included
4. **SEO issues**: Use tools like Google Search Console

### JSON Validation
Before publishing, validate your JSON at: https://jsonlint.com/

## Example Complete Article Entry

```json
{
  "id": 10,
  "title": "Revolutionizing Textile Dyeing with Natural Pigments",
  "excerpt": "Discover how ancient natural dyeing techniques combined with modern technology are creating sustainable alternatives to synthetic textile dyes.",
  "content": "The textile industry's environmental impact extends far beyond fiber production to include the dyeing process, which traditionally relies on synthetic chemicals that pollute waterways and harm ecosystems. Bio-Aryavedic's latest innovation combines traditional natural dyeing techniques with cutting-edge extraction and application methods to create vibrant, long-lasting colors without environmental damage.\\n\\nOur research team has developed proprietary extraction methods that concentrate natural pigments from plants like turmeric, indigo, and madder root, achieving color intensity that rivals synthetic dyes. The process uses 70% less water than conventional dyeing and produces zero toxic wastewater.\\n\\nPilot testing with textile manufacturers has shown excellent color fastness and durability, with natural dyes maintaining their vibrancy through multiple wash cycles. The economic benefits are equally compelling, with production costs 15% lower than synthetic alternatives when scaled to industrial volumes.",
  "type": "blog",
  "category": "Innovation",
  "tags": ["innovation", "sustainability", "technology"],
  "author": "Dr. Anita Krishnan",
  "authorBio": "Natural Dye Specialist and Chemical Engineer",
  "date": "2024-01-25",
  "readingTime": 7,
  "image": "assets/images/natural-textile-dyes.jpg",
  "featured": false,
  "seo": {
    "metaTitle": "Natural Textile Dyes: Sustainable Alternative to Synthetic Colors",
    "metaDescription": "Learn how Bio-Aryavedic's natural dyeing technology reduces water usage by 70% while creating vibrant, long-lasting textile colors.",
    "keywords": ["natural textile dyes", "sustainable dyeing", "eco-friendly textiles", "natural pigments", "textile innovation"]
  }
}
```

This comprehensive system ensures your resources page remains fresh, SEO-optimized, and easy to maintain while providing valuable content to your audience. 