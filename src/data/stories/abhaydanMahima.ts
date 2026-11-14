import type { Story } from '../../types/story';

export const abhaydanMahimaStory: Story = {
  id: 'abhaydan-mahima-story',
  title: 'The Glory of Abhayadan / अभयदान की महिमा',
  description: 'A wild boar earns a heavenly rebirth by protecting a monk, showing the merit of offering refuge and protection.',
  category: 'Jain Story',
  difficulty: 'beginner',
  estimatedMinutes: 6,
  source: 'https://encyclopediaofjainism.com/',
  sections: [
    {
      id: 'section-1',
      title: 'Story',
      passage: `The Glory of Abhayadan

In a village, a potter and a barber jointly built a dharamshala (a rest house for pilgrims). One day, the potter brought a Jain monk (Muniraj) and arranged for him to stay in the dharamshala. The next day, the barber removed the monk and brought an ascetic (Sanyasi) to stay there instead. Due to this conflict, the two men fought and died. After death, the potter’s soul was reborn as a wild boar, and the barber’s soul was reborn as a tiger.

Once, that same Jain monk was meditating in a forest cave. Driven by past-life impressions, the tiger came to devour him, while the wild boar tried to protect him. Both animals died while fighting each other. Because the wild boar died with the noble intention of protecting the monk, his soul attained the heavenly realm (Devagati). Conversely, the tiger died with violent intentions and went to hell. Look! Through the great merit of offering shelter (Vasatidan), even a wild boar attained heaven.`,
      passageHindi: `अभयदान की महिमा

एक गाँव में एक कुम्हार और नाई ने मिलकर एक धर्मशाला बनवाई। कुम्हार ने एक दिन एक मुनिराज को लाकर धर्मशाला में ठहरा दिया। तब नाई ने दूसरे दिन मुनि को निकालकर एक सन्यासी को लाकर ठहरा दिया। इस निमित्त से दोनों लड़कर मरे और कुम्हार का जीव सूकर हो गया तथा नाई का जीव व्याघ्र हो गया। एक बार जंगल की गुफा में मुनिराज विराजमान थे। पूर्व संस्कार से वह व्याघ्र उन्हें खाने को आया और सूकर ने उन्हें बचाना चाहा। दोनों लड़ते हुए मर गये। सूकर के भाव मुनिरक्षा के थे अतः वह मरकर देवगति को प्राप्त हो गया और व्याघ्र हिंसा के भाव से मरकर नरक में चला गया। देखो! वसतिदान के माहात्म्य से सूकर ने स्वर्ग प्राप्त कर लिया। `,
      questions: [
        {
          id: 'q1',
          question: 'What did the potter and barber build together?',
          questionHindi: 'कुम्हार और नाई ने मिलकर क्या बनवाया?',
          options: ['A temple', 'A dharamshala', 'A palace', 'A forest shelter'],
          optionsHindi: ['मंदिर', 'धर्मशाला', 'महल', 'वन में आश्रय'],
          correctAnswer: 1,
          marks: 1,
          difficulty: 'easy',
          explanation: 'The potter and barber jointly built a dharamshala.',
        },
        {
          id: 'q2',
          question: 'What animals were the potter and barber reborn as?',
          questionHindi: 'कुम्हार और नाई का पुनर्जन्म किन जीवों के रूप में हुआ?',
          options: ['A deer and a lion', 'A wild boar and a tiger', 'Two wild boars', 'Two tigers'],
          optionsHindi: ['हिरण और सिंह', 'सूकर और व्याघ्र', 'दो सूकर', 'दो व्याघ्र'],
          correctAnswer: 1,
          marks: 1,
          difficulty: 'easy',
          explanation: 'The potter was reborn as a wild boar, and the barber as a tiger.',
        },
        {
          id: 'q3',
          question: 'Why did the wild boar attain Devagati?',
          questionHindi: 'सूकर देवगति को क्यों प्राप्त हुआ?',
          options: ['It protected the monk', 'It built a dharamshala', 'It defeated the tiger', 'It brought the monk food'],
          optionsHindi: ['उसने मुनिराज की रक्षा की', 'उसने धर्मशाला बनवाई', 'उसने व्याघ्र को हराया', 'उसने मुनिराज के लिए आहार लाया'],
          correctAnswer: 0,
          marks: 1,
          difficulty: 'easy',
          explanation: 'The wild boar died with the intention of protecting the monk.',
        },
        {
          id: 'q4',
          question: 'What is the story’s lesson about Vasatidan?',
          questionHindi: 'इस कथा में वसतिदान के बारे में क्या शिक्षा दी गई है?',
          options: ['Offering shelter and protection brings great merit', 'Only kings can offer shelter', 'Animals cannot have good intentions', 'A shelter should be used only by ascetics'],
          optionsHindi: ['आश्रय और रक्षा देना महान पुण्य का कारण है', 'केवल राजा ही आश्रय दे सकते हैं', 'पशुओं में शुभ भाव नहीं हो सकते', 'धर्मशाला केवल संन्यासियों के लिए होनी चाहिए'],
          correctAnswer: 0,
          marks: 2,
          difficulty: 'medium',
          explanation: 'The story concludes that the merit of offering shelter helped the wild boar attain heaven.',
        },
      ],
    },
  ],
};