import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleArticle extends Schema.Component {
  collectionName: 'components_article_articles';
  info: {
    displayName: 'article';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'Banner';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    buttons: Attribute.Component<'button.button', true>;
  };
}

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    metaImage: Attribute.Media;
    keywords: Attribute.String;
  };
}

export interface SharedShared extends Schema.Component {
  collectionName: 'components_shared_shareds';
  info: {
    displayName: 'MetaSocial';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['likendin', 'facebook']>;
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.article': ArticleArticle;
      'banner.banner': BannerBanner;
      'button.button': ButtonButton;
      'shared.seo': SharedSeo;
      'shared.shared': SharedShared;
    }
  }
}
