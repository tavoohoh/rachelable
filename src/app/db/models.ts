export interface TranslatedValueModel {
  ES: string;
  EN: string;
}

export interface CallToActionModel {
  content: TranslatedValueModel;
  buttonText: TranslatedValueModel;
};

export interface PresentationModel {
  title: TranslatedValueModel;
  content: TranslatedValueModel;
}

export interface TestimonialModel {
  image: string;
  person: string;
  title: TranslatedValueModel;
  content: TranslatedValueModel;
}

export interface HomeDbModel {
  presentation: PresentationModel;
  callToAction: CallToActionModel;
  testimonials: Array<TestimonialModel>;
}
