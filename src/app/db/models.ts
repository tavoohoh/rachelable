export interface ParagraphModel {
  es: string | Array<string>;
  en: string | Array<string>;
}

export interface CallToActionModel {
  content: ParagraphModel;
  buttonText: ParagraphModel;
};

export interface PresentationModel {
  title: ParagraphModel;
  content: ParagraphModel;
}

export interface TestimonialModel {
  image: string;
  person: string;
  title: ParagraphModel;
  content: ParagraphModel;
}


export interface educationModel {
  logo: string;
  course: ParagraphModel;
  institution: string;
  year: number;
  tags?: {
    es: Array<string>;
    en: Array<string>;
  };
}

export interface HomeDbModel {
  presentation: PresentationModel;
  callToAction: CallToActionModel;
  testimonials: Array<TestimonialModel>;
}

export interface AboutModel {
  presentation: PresentationModel;
  callToAction: CallToActionModel;
  education: Array<educationModel>;
}

export interface ContactModel {
  presentation: PresentationModel;
}
