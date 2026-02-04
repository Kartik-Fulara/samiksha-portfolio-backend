import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsTool extends Struct.ComponentSchema {
  collectionName: 'components_elements_tools';
  info: {
    description: 'Individual tool with icon and styling options';
    displayName: 'Tool';
    icon: 'cube';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#ffffff'>;
    hoverEffect: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    rounded: Schema.Attribute.Enumeration<
      ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full']
    > &
      Schema.Attribute.DefaultTo<'xl'>;
    shadow: Schema.Attribute.Enumeration<
      ['none', 'sm', 'md', 'lg', 'xl', '2xl']
    > &
      Schema.Attribute.DefaultTo<'md'>;
  };
}

export interface SectionsAboutCanvas extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_canvas';
  info: {
    displayName: 'About Canvas';
    icon: 'link';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    leftImage: Schema.Attribute.Component<'sections.image-component', false>;
    RightImage: Schema.Attribute.Component<'sections.image-component', false>;
  };
}

export interface SectionsAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_heroes';
  info: {
    displayName: 'AboutHero';
    icon: 'eye';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsBeyondCanvas extends Struct.ComponentSchema {
  collectionName: 'components_sections_beyond_canvas';
  info: {
    description: 'Animated header section with wavy borders';
    displayName: 'Beyond Canvas Section';
    icon: 'brush';
  };
  attributes: {
    gap: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 10;
        },
        number
      > &
      Schema.Attribute.DefaultTo<40>;
    lineColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#3b82f6'>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"When I'm Not Designing">;
    subtitleColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#2563eb'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Beyond The Canvas'>;
    titleColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#111827'>;
    waveAmplitude: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 10;
        },
        number
      > &
      Schema.Attribute.DefaultTo<50>;
    waveFrequency: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 0.1;
          min: 0.001;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0.025>;
  };
}

export interface SectionsButton extends Struct.ComponentSchema {
  collectionName: 'components_sections_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    className: Schema.Attribute.String;
    fontKey: Schema.Attribute.Enumeration<
      ['arial', 'inter', 'poppins', 'sfpro', 'geist', 'maiky', 'amita']
    > &
      Schema.Attribute.DefaultTo<'arial'>;
    fontSize: Schema.Attribute.String;
    href: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    variant: Schema.Attribute.Enumeration<['default', 'outline', 'ghost']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SectionsCaseStudyCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_case_studies_cards';
  info: {
    description: 'Animated case study card with image, description, and links';
    displayName: 'Case Studies Card';
    icon: 'folder';
  };
  attributes: {
    caseStudyLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'I created Sugarpop to explore how playful visuals and vibrant colors can enhance user engagement without overwhelming usability.'>;
    image: Schema.Attribute.Media<'images'>;
    prototypeLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    prototypeTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Prototype'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Sugarpop'>;
  };
}

export interface SectionsColorPalette extends Struct.ComponentSchema {
  collectionName: 'components_sections_color_palettes';
  info: {
    displayName: 'Color Palette';
  };
  attributes: {
    colors: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContainer extends Struct.ComponentSchema {
  collectionName: 'components_sections_containers';
  info: {
    displayName: 'Container';
  };
  attributes: {
    className: Schema.Attribute.String;
    components: Schema.Attribute.DynamicZone<
      [
        'sections.image-component',
        'sections.rich-content',
        'sections.typography',
        'sections.button',
      ]
    >;
    layout: Schema.Attribute.Enumeration<
      ['flex-row', 'flex-col', 'grid-2', 'grid-3', 'grid-4']
    > &
      Schema.Attribute.DefaultTo<'flex-col'>;
  };
}

export interface SectionsCustomHtml extends Struct.ComponentSchema {
  collectionName: 'components_sections_custom_htmls';
  info: {
    displayName: 'Custom HTML';
  };
  attributes: {
    className: Schema.Attribute.String;
    html: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsDesignJourney extends Struct.ComponentSchema {
  collectionName: 'components_sections_design_journey';
  info: {
    description: 'Job experience section with tools used';
    displayName: 'Design Journey Section';
    icon: 'briefcase';
  };
  attributes: {
    companyName: Schema.Attribute.String & Schema.Attribute.Required;
    companyUrl: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    duration: Schema.Attribute.String & Schema.Attribute.Required;
    jobTitle: Schema.Attribute.String & Schema.Attribute.Required;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'My Design Journey'>;
    sectionTitleColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#095BBC'>;
    toolsSections: Schema.Attribute.Component<'sections.tools-used', true>;
  };
}

export interface SectionsFlowDiagram extends Struct.ComponentSchema {
  collectionName: 'components_sections_flow_diagrams';
  info: {
    displayName: 'Flow Diagram';
  };
  attributes: {
    flows: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface SectionsFontPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_font_previews';
  info: {
    displayName: 'Font Preview';
  };
  attributes: {
    font: Schema.Attribute.String;
    fontKey: Schema.Attribute.Enumeration<
      ['arial', 'inter', 'poppins', 'sfpro', 'geist', 'maiky', 'amita']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'arial'>;
    previewClassName: Schema.Attribute.String;
    previewText: Schema.Attribute.String;
    samples: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFrame extends Struct.ComponentSchema {
  collectionName: 'components_sections_frames';
  info: {
    displayName: 'Frame';
  };
  attributes: {
    borderColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#A78BFA'>;
    borderRadius: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'16px'>;
    borderWidth: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'2px'>;
    className: Schema.Attribute.String;
    components: Schema.Attribute.DynamicZone<
      [
        'sections.image-component',
        'sections.rich-content',
        'sections.typography',
        'sections.button',
      ]
    >;
    padding: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'24px'>;
    showBorder: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
    titleColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#8B5CF6'>;
  };
}

export interface SectionsHeroImageContents extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_image_contents';
  info: {
    description: 'Hero section with image on one side and content on the other';
    displayName: 'Hero Image + Content';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionsImageComponent extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_components';
  info: {
    displayName: 'Image Component';
  };
  attributes: {
    alt: Schema.Attribute.String;
    aspectRatio: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'aspect-[9/10]'>;
    bottomLabel: Schema.Attribute.String;
    hoverEffect: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    src: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionsImageGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_grids';
  info: {
    displayName: 'Image Grid';
  };
  attributes: {
    className: Schema.Attribute.String;
    columns: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4>;
    gap: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<10>;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface SectionsPersonaCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_persona_cards';
  info: {
    displayName: 'Persona Card';
  };
  attributes: {
    personas: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface SectionsProjectInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_project_infos';
  info: {
    description: 'Hero section with image and description overlay';
    displayName: 'Project Info';
  };
  attributes: {
    className: Schema.Attribute.String;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    imageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    imageSrc: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionsRichContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_contents';
  info: {
    description: 'Rich text content using Blocks';
    displayName: 'Rich Content';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SectionsStep extends Struct.ComponentSchema {
  collectionName: 'components_sections_steps';
  info: {
    description: 'A step in the project workflow';
    displayName: 'Step';
  };
  attributes: {
    components: Schema.Attribute.DynamicZone<
      [
        'sections.font-preview',
        'sections.color-palette',
        'sections.flow-diagram',
        'sections.persona-card',
        'sections.rich-content',
        'sections.image-component',
        'sections.frame',
        'sections.button',
        'sections.typography',
        'sections.image-grid',
        'sections.custom-html',
        'sections.container',
      ]
    >;
    connectToPrevious: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    contentClassName: Schema.Attribute.String;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleClassName: Schema.Attribute.String;
  };
}

export interface SectionsStepsLayout extends Struct.ComponentSchema {
  collectionName: 'components_sections_steps_layouts';
  info: {
    description: 'Container for step-by-step content with visual connectors';
    displayName: 'Steps Layout';
  };
  attributes: {
    className: Schema.Attribute.String;
    connectHero: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    hero: Schema.Attribute.Component<'sections.project-info', false>;
    lineColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-[#007AFF]/30'>;
    stepColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-[#007AFF]'>;
    steps: Schema.Attribute.Component<'sections.step', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionsToolsUsed extends Struct.ComponentSchema {
  collectionName: 'components_sections_tools_used';
  info: {
    description: 'Display tools/technologies used with icons';
    displayName: 'Tools Used Section';
    icon: 'puzzle-piece';
  };
  attributes: {
    lineColor: Schema.Attribute.String;
    lineGradientFrom: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#3b82f6'>;
    lineGradientTo: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#a855f7'>;
    showLine: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    tools: Schema.Attribute.Component<'elements.tool', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionsTypography extends Struct.ComponentSchema {
  collectionName: 'components_sections_typographies';
  info: {
    displayName: 'Typography';
  };
  attributes: {
    className: Schema.Attribute.String;
    fontKey: Schema.Attribute.Enumeration<
      ['arial', 'inter', 'poppins', 'sfpro', 'geist', 'maiky', 'amita']
    > &
      Schema.Attribute.DefaultTo<'arial'>;
    href: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'body', 'bodyLarge', 'small', 'link', 'span']
    > &
      Schema.Attribute.DefaultTo<'body'>;
  };
}

export interface SharedNavItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_items';
  info: {
    description: 'Single navigation link';
    displayName: 'Nav Item';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for pages';
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'index, follow'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface UiBadge extends Struct.ComponentSchema {
  collectionName: 'components_ui_badges';
  info: {
    description: 'Reusable badge component with variants';
    displayName: 'Badge';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    asChild: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['default', 'secondary', 'destructive', 'outline']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.tool': ElementsTool;
      'sections.about-canvas': SectionsAboutCanvas;
      'sections.about-hero': SectionsAboutHero;
      'sections.beyond-canvas': SectionsBeyondCanvas;
      'sections.button': SectionsButton;
      'sections.case-study-card': SectionsCaseStudyCard;
      'sections.color-palette': SectionsColorPalette;
      'sections.container': SectionsContainer;
      'sections.custom-html': SectionsCustomHtml;
      'sections.design-journey': SectionsDesignJourney;
      'sections.flow-diagram': SectionsFlowDiagram;
      'sections.font-preview': SectionsFontPreview;
      'sections.frame': SectionsFrame;
      'sections.hero-image-contents': SectionsHeroImageContents;
      'sections.image-component': SectionsImageComponent;
      'sections.image-grid': SectionsImageGrid;
      'sections.persona-card': SectionsPersonaCard;
      'sections.project-info': SectionsProjectInfo;
      'sections.rich-content': SectionsRichContent;
      'sections.step': SectionsStep;
      'sections.steps-layout': SectionsStepsLayout;
      'sections.tools-used': SectionsToolsUsed;
      'sections.typography': SectionsTypography;
      'shared.nav-items': SharedNavItems;
      'shared.seo': SharedSeo;
      'ui.badge': UiBadge;
    }
  }
}
