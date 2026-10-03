import type { Story } from '../../types/story';

import { anjanChorStory } from './anjanChor';
import { anantmatiStory } from './anantmati';
import { ahardaanStory } from './ahardaan';
import { jinendrabhaktSethStory } from './jinendrabhaktSeth';
import { revatiRaniStory } from './revatiRani';
import { solahKaranStory } from './solahkaran';
import { uddayanStory } from './uddayan';

export const storyLibrary: Story[] = [ahardaanStory, solahKaranStory, anjanChorStory, anantmatiStory, uddayanStory, revatiRaniStory, jinendrabhaktSethStory];
/*
  {
    id: 'queen-chelna-and-king-shrenik',
    title: 'QUEEN CHELNA AND KING SHRENIK Story',
    description: 'Original story text provided by the user.',
    category: 'Jain Story',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    sections: [
      {
        id: 'section-1',
        title: 'Story',
        passage: `This is a story from the time of Bhagwan Mahavir. At that time, king Chetak was the ruler of Vaishali and he had a beautiful daughter named Chelna. Once an artist called Bharat painted a picture of Chelna and showed it to king Shrenik (Bimbisar) of Magadh. Charmed by Chelna’s beauty, Shrenik fell in love with her. One day Chelna came to the city of Magadh where she saw king Shrenik, and she also fell in love with him. They soon got married.

Queen Chelna was a devoted follower of Jainism, while Shrenik was influenced by the Buddhism. The king was very generous with a big heart but somehow was not happy with his queen’s devotion to the Jain monks. He wanted to prove to Chelna that Jain monks were pretenders. He strongly believed that no man could follow the practice of self-restraint and non-violence to that extent, and that the equanimity shown by Jain monks was just superficial. Chelna was greatly disturbed by this.

One day king Shrenik went on a hunting trip where he saw a Jain monk, Yamadhar, engaged in deep meditation. Shrenik let his hunter dogs go after Yamadhar but the monk remained silent. On seeing the calmness and composure of the monk the dogs became quiet. king Shrenik got angry and thought that the monk had played some trick on them. So he started shooting arrows at the monk but they kept on missing him. Becoming more upset, he finally put a dead snake around Yamadhar’s neck and came back to his palace.

The king narrated the whole incident to Chelna. The queen felt very sorry and took the king back to Yamadhar’s meditation spot. Because of the dead snake, ants, and other insects were crawling all over the monk’s body but the monk did not even stir. The couple witnessed the limits of human endurance. The queen gently removed the ants and snake from the monk’s body and cleaned his wounds. She applied sandalwood paste. After sometime, Yamadhar opened his eyes and blessed both of them.

The monk did not distinguish between the king who had caused him pain, and the queen who had alleviated his pain. King Shrenik was very impressed, and convinced that Jain monks were truly beyond attachment and aversion. Thus, king Shrenik along with queen Chelna became a devoted member of the order of Bhagawan Mahavir.`,
        questions: [
          {
            id: 'q1',
            question: 'According to the story, who was Queen Chelna’s father?',
            options: ['King Shrenik', 'King Chetak', 'Bhagwan Mahavir', 'Yamadhar'],
            correctAnswer: 1,
            marks: 1,
            difficulty: 'easy',
            explanation: 'The story says King Chetak was the ruler of Vaishali and the father of Chelna.',
          },
          {
            id: 'q2',
            question: 'What did King Shrenik learn from Yamadhar’s calmness?',
            options: [
              'That Jain monks were pretenders',
              'That Jain monks were beyond attachment and aversion',
              'That hunting was the best practice',
              'That Chelna was wrong to follow Jainism',
            ],
            correctAnswer: 1,
            marks: 2,
            difficulty: 'medium',
            explanation: 'The story states that Shrenik was impressed and convinced that Jain monks were truly beyond attachment and aversion.',
          },
          {
            id: 'q3',
            question: 'What did King Shrenik place around Yamadhar’s neck?',
            options: ['A flower garland', 'A dead snake', 'A sandalwood necklace', 'A cloth bandage'],
            correctAnswer: 1,
            marks: 1,
            difficulty: 'easy',
            explanation: 'The story says that Shrenik placed a dead snake around Yamadhar’s neck before returning to the palace.',
          },
          {
            id: 'q4',
            question: 'What did Queen Chelna apply after cleaning Yamadhar’s wounds?',
            options: ['Water', 'Oil', 'Sandalwood paste', 'Ash'],
            correctAnswer: 2,
            marks: 1,
            difficulty: 'easy',
            explanation: 'The story says Queen Chelna cleaned Yamadhar’s wounds and applied sandalwood paste.',
          },
          {
            id: 'q5', question: 'Who ruled Vaishali at the time of the story?', options: ['King Chetak', 'King Shrenik', 'Yamadhar', 'Bharat'], correctAnswer: 0, marks: 1, difficulty: 'easy', explanation: 'The story says King Chetak was the ruler of Vaishali.'
          },
          {
            id: 'q6', question: 'What did artist Bharat paint?', options: ['A picture of Chelna', 'A picture of Yamadhar', 'A picture of Vaishali', 'A picture of the hunting dogs'], correctAnswer: 0, marks: 1, difficulty: 'easy', explanation: 'The story says Bharat painted a picture of Chelna and showed it to King Shrenik.'
          },
          {
            id: 'q7', question: 'Where was King Shrenik the king?', options: ['Vaishali', 'Magadh', 'Simvak', 'Bhogavati'], correctAnswer: 1, marks: 1, difficulty: 'easy', explanation: 'The story identifies Shrenik as the king of Magadh.'
          },
          {
            id: 'q8', question: 'What kind of trip did King Shrenik take?', options: ['A hunting trip', 'A pilgrimage', 'A trading trip', 'A journey to Vaishali'], correctAnswer: 0, marks: 1, difficulty: 'easy', explanation: 'The story says King Shrenik went on a hunting trip.'
          },
          {
            id: 'q9', question: 'What was Yamadhar doing when Shrenik saw him?', options: ['Teaching in a village', 'Engaged in deep meditation', 'Preparing food', 'Traveling to Magadh'], correctAnswer: 1, marks: 1, difficulty: 'easy', explanation: 'The story says Yamadhar was engaged in deep meditation.'
          },
          {
            id: 'q10', question: 'What happened to Shrenik’s arrows?', options: ['They hit Yamadhar', 'They kept missing Yamadhar', 'They turned into flowers', 'They were taken by the dogs'], correctAnswer: 1, marks: 1, difficulty: 'easy', explanation: 'The story says the arrows kept missing Yamadhar.'
          },
          {
            id: 'q11', question: 'Who took Shrenik back to Yamadhar’s meditation spot?', options: ['Bharat', 'Queen Chelna', 'King Chetak', 'The hunter'], correctAnswer: 1, marks: 1, difficulty: 'easy', explanation: 'The queen felt sorry and took the king back to Yamadhar’s meditation spot.'
          },
          {
            id: 'q12', question: 'What crawled over Yamadhar’s body?', options: ['Ants and other insects', 'Birds and deer', 'Dogs and horses', 'Fish and snakes only'], correctAnswer: 0, marks: 1, difficulty: 'easy', explanation: 'The story says ants and other insects crawled all over the monk’s body.'
          },
          {
            id: 'q13', question: 'What did Yamadhar do after opening his eyes?', options: ['He blessed both of them', 'He left the forest', 'He spoke angrily', 'He called the hunter'], correctAnswer: 0, marks: 1, difficulty: 'easy', explanation: 'The story says Yamadhar opened his eyes and blessed the king and queen.'
          },
          {
            id: 'q14', question: 'Who became devoted members of Bhagawan Mahavir’s order?', options: ['Shrenik and Chelna', 'Bharat and Chetak', 'Yamadhar and Bharat', 'The hunter and the dogs'], correctAnswer: 0, marks: 2, difficulty: 'medium', explanation: 'The story concludes that King Shrenik and Queen Chelna became devoted members of Bhagawan Mahavir’s order.'
          },
          {
            id: 'q15', question: 'What quality did Yamadhar show by treating the king and queen alike?', options: ['Attachment and aversion', 'Freedom from attachment and aversion', 'Anger and fear', 'Pride and ambition'], correctAnswer: 1, marks: 2, difficulty: 'medium', explanation: 'The story says Yamadhar did not distinguish between the king who caused pain and the queen who alleviated it.'
          },
        ],
      },
    ],
  },
  /*
  {
    id: 'gautam-swami-story',
    title: 'Gautam Swami Story',
    description: 'Original story text provided by the user.',
    category: 'Jain Story',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
    sections: [
      {
        id: 'section-1',
        title: 'Story',
        passage: `In 607 B. C., in the village of Gobargaon, a Brahmin couple called Vasubhuti and Prithvi Gautam (family name) had a son named Indrabhuti. He was tall and handsome. He had two younger brothers named Agnibhuti and Vayubhuti. All three were well versed in the Vedas and other rituals at an early age. They were very popular and great scholars in the state of Magadh. Each one of them had 500 disciples.


Once in the city of Apapa, a Brahmin named Somil was conducting a Yagna (sacrificial ceremony) at his home. There were over four thousand Brahmins present at the occasion, and there were eleven popular scholars among them.

Indrabhuti stood out as a bright star. Somil was a staunch supporter of the Brahmin philosophy and was very happy during the ceremony. The whole town was excited by this event in which they were going to sacrifice the sheep and the goats. Suddenly, Somil noticed many celestial beings coming down towards his sacrificial site. He thought that this would make his offering ceremony the most popular in the history. He told the people, “Look at the sky, even the angels are coming to bless us.” The whole town was eagerly looking at the sky.

To their surprise, the celestial beings did not stop at their site, instead they went further down. Somil’s ego melted away as he learned that the celestial beings paid homage to Lord Mahävir, who had come to near by Mahasen Forest. Indrabhuti was outraged by this incident and his ego was bruised. He started thinking to himself, “Who is this Mahävir who does not even use affluent Sanskrit, but speaks the common public language of Ardha Magadhi.” Everyone in the ceremony was overpowered by the mere presence of Lord Mahävir. Indrabhuti once again thought, “Mahävir opposes animal sacrifices, and if he succeeds then we Brahmins will loose our livelihood. I will debate with him.” He left to challenge him.

Mahävir welcomed Indrabhuti by calling him by his name even though they had never met before. Indrabhuti was surprised, but then he said to himself, “Who does not know me? I am not surprised he knew my name. I wonder if he knows what I am thinking.” Omniscient Mahävira knew what was going through Indrabhuti’s mind. Indrabhuti, even though a great scholar, had a doubt about the existence of Atma (soul) and was thinking to himself, “Can Mahävir tell that I doubt the existence of the soul?” The next moment Mahävir said, “Indrabhuti, Atma (soul – consciousness) is there and you should not question it.” Indrabhuti was shocked and began to think very highly of Mahävir. Then, they had a philosophical discussion, and Indrabhuti changed his beliefs and he became Mahävir’s first and chief disciple. Indrabhuti was fifty years old at the time, and from then on he was called Gautamswämi, beause he came from Gautam family.

Meanwhile in the town, Somil and other scholars were waiting to greet the expected winner of the debate, Indrabhuti. They were shocked to learn that Indrabhuti had become the disciple of Mahävir. The other ten Brahmin scholars, also went to debate with Mahavir, also became his disciples, the same way as Indrabhuti. The people present at the Somil’s place began to leave, and Somil canceled the ceremony and turned all the animals loose.

One time, Gautamswämi was going back after the gochari (getting food or alms), and he noticed many people going in another direction. He asked them what was going on. They said, “We are going to see Anand shravak. He has been performing austerities and has attained a special knowledge (Avadhignan).” Anand shravak was Mahävir’s follower, so Gautamswämi decided to go and visit him. When Anand saw Gautamswämi coming to his house, he was very happy that his guru (spiritual teacher) was coming. However, even though he was very weak due to his austerities, he got up and welcomed Gautamswämi. Gautamswämi inquired about his condition. Anand replied, “With your blessings, I am fine.” After some time, Anand told Gautamswämi with respect, “Reverend teacher, I have attained Avadhijnan because of which I can see as high as fourteenth heaven and as low as the seventh hell.” Gautamswämi thought, ” A shravak can attain Avadhijnan, but not to this extent.” Aloud he told Anand, “You should do prayshchit (atonement) for your imagination.” Anand was puzzled. He knew what he could see, but his teacher told him to atone for telling that. So, he politely asked Gautamswämi, “Does one have to atone for telling the truth?” Gautamswämi replied, “No,” and then left the place thinking, “I will reconfirm this with Lord Mahävir.”

Gautamswämi returned to Lord Mahävir, who was sitting with his other disciples, and asked about Anand. Mahävir said, “Gautam, Anand was telling the truth. How could a person like you with so much knowledge make such a mistake? You should atone for your mistake.” Mahävir believed in the truth, and he would never cover up the mistake of his disciple just to make their group look good. Gautamswämi put his alms aside, and immediately went to Anand’s house to ask for forgiveness for his doubt. Anand was proud of his humble teacher, who did not mind admitting his own fault to his followers.

On another occasion, Gautamswämi went to town for the alms. He was returning with the kheer (a sweet made from rice and milk) in a patra (bowl) when he saw fifteen hundred hermits. Gautamswämi felt that they were hungry and offered them the kheer. They began to wonder how Gautamswämi would feed all of them. Gautamswämi requested all of the hermits to sit down, and then he served everyone with the kheer with the help of Aksheenmahanasi (nondiminishing) Labdhi (special power). While serving the kheer, he kept his thumb in the kheer. To everyone’s surprise they were all well served from the small patra (bowl). The hermits were all so impressed by Gautamswämi, that all fifteen hundred decided to take diksha (renunciation) from Lord Mahavir.

Many sadhus, including those hermits, attained Kevaljnan, but Gautamswämi was still unable to achieve it. He was worried that he would never attain Kevaljnan. One day, Gautamswämi asked Lord Mahävir, “There were eleven of us (main desciples – Gandhars) who accepted diksha and most of them have attained Kevaljnan. Why am I so unlucky that I am not able to attain Kevaljnan?” Lord Mahävir replied, “Gautam, you have too much affection for me. In order to attain Kevaljnan you must overcome the attachment. So, until you give up your attachment towards me, it would not be possible for you to attain Kevaljnan.”


     On the day when Mahavir was to attain nirvana (liberation), Mahavira sent Gautamswämi out to preach to a man named Devsharma. On his way back, Gautamswämi learned that Lord Mahävir had attained nirvana and reached the moksha (salvation). Gautamswämi went into a state of shock and sorrow, lamenting, “Lord Mahävir knew this was going to happen. Why did he send me away.” Gautamswämi could not stop his tears and started weeping. Within a few minutes, he came back to his senses and began thinking, “Maybe this was destined to happen this way. No one can live forever; no relationship is permanent. Why was I so attached to Mahävir?” He contemplated that he was wrong and gave up attachment for Mahavir. During this deep thinking, he burned his Ghati Karmas and attained Kevaljnan at the age of eighty.

Gautamswämi taught and spread Jain principles for next twelve years. He attained Moksha, at the age of ninety-two in 515 B. C.`,
        questions: [
          {
            id: 'q1',
            question: 'Why did Indrabhuti decide to challenge Mahavir?',
            options: ['He feared a loss of livelihood for Brahmins', 'He wanted to become king', 'He disliked the city', 'He wanted to leave Magadh'],
            correctAnswer: 0,
            marks: 2,
            difficulty: 'medium',
            explanation: 'The story says he feared Mahavir would oppose animal sacrifice and harm Brahmin livelihood.',
          },
          {
            id: 'q2',
            question: 'What was the key lesson Gautam Swami learned?',
            options: ['Pride is a strength', 'Attachment to Mahavir blocked Kevaljnan', 'Silence is always better than speech', 'Only scholars can attain liberation'],
            correctAnswer: 1,
            marks: 2,
            difficulty: 'medium',
            explanation: 'Mahavir told Gautam that too much attachment prevented Kevaljnan, and Gautam later gave up that attachment.',
          },
          {
            id: 'q3',
            question: 'What did Somil do after the Brahmin scholars became Mahavir’s disciples?',
            options: ['He continued the ceremony', 'He canceled the ceremony and turned the animals loose', 'He challenged King Shrenik', 'He left for Gobargaon'],
            correctAnswer: 1,
            marks: 1,
            difficulty: 'easy',
            explanation: 'The story says Somil canceled the ceremony and turned all the animals loose after the scholars became Mahavir’s disciples.',
          },
          {
            id: 'q4',
            question: 'How many hermits did Gautam Swami serve with the kheer?',
            options: ['Five hundred', 'One thousand', 'Fifteen hundred', 'Four thousand'],
            correctAnswer: 2,
            marks: 1,
            difficulty: 'easy',
            explanation: 'The story says Gautam Swami served fifteen hundred hermits with the kheer from a small bowl.',
          },
        ],
      },
    ],
  },
  */
/*
  ahardaanStory,
  {
    id: 'thrithankar-mahavir-story',
    title: 'Thrithankar Mahavir Story',
    description: 'Original story text provided by the user.',
    category: 'Jain Story',
    difficulty: 'advanced',
    estimatedMinutes: 20,
    sections: [
      {
        id: 'section-1',
        title: 'Story',
        passage: `Tirthankar Mahaveer was the last and the twenty-fourth Tirthankar of this epoch. There were twenty-three Tirthankaras before him e. g. Rishabhdeo and others.

Bhagwans (Gods) are infinite, but Tirthankaras in one epoch and in Bharatkshetra are twenty-four only. Every Tirthankar, as a rule, is a Bhagwan, but every Bhagwan is not a Tirthankar. A soul can attain godhood without being a Tirthankar. Every soul can become a God. That which leads to the attainment of perfection is called Tirtha and those who reach that supreme state themselves and show others the path of emancipation are called the Tirthankaras.

Bhagwan is not born, he grows to be one. Nobody is a Bhagwan since his birth. Mahaveer also was not a Bhagwan since his birth. He became a God, when he conquered himself. To conquer delusion, attachment and aversion is to conquer oneself.

Though the principles enunciated by Bhagwan Mahaveer are very deep, intricate, impressive and acceptable, his life is very easy, straight and eventless; there is no place for varieties in it. The story of his life, in brief is that he spent the first thirty years of life in the midst of wealth and splendour indifferently as a lotus in water. For the next twelve years he was engaged in the pursuit of the supreme soul and lived in jungles in deep meditation and during the fast thirty years, he expounded Sarvodaya i.e. the welfare of all living beings, propagated it and spread it throughout the four corners of the land, The life of Mahaveer is not eventful. It is vain to search for his personality in the course of events. However, there can be no event that did not happen in the infinite previous lives through which he had passed.

Mahaveer was born in Kundgram from the womb of queen Trishala, the wife of the Lichhavi King Siddhartha, the famous leader of the Vaishali Republic. His mother was the daughter of King Chetak, the President of the Vaishali Republic. He was born in the Nath family of Kshatriya clan, 2600 years back, on the thirteenth day of the second fortnight of Chaitra month. Looking at his constant growth, his parents named him Vardhman.

The festival of his birth was, celebrated with great zeal not only by his parents, relations and subjects of the kingdom, but also by gods and their lords, since he was going to be a Tirthankar. This festival is called Janma Kalyanak Mahotsava. The lord of the gods, Indra seated him on the elephant Erawat and performed the anointing ceremony with great pomp and show. The Jain epic texts give a vivid description of this event.

Even before his coming in the womb of his mother, it was known that a Tirthankar was to be born. One night, in the last hours, mother Priyakarini Trishla in her quiet sleep saw the following sixteen dreams indicative of a very auspicious happening .-

1. An elephant mad with intoxication.

2. A white ox with high shoulders.

3. A thundering lion.

4. Laxmi, the goddess of wealth, seated on the lotus throne.

5. Two fragrant garlands.

6. Moon in the assembly of stars.

7. Rising sun.

8. Two gold pitchers covered with lotus leaves.

9. Two fish playing in the tank.

10. A tank full to the brim with clean water.

11. The roaring ocean.

12. A throne inwrought with jewels.

13. A chariot of gods illuminated with gems.

14. The spacious sky touching the abode of Dharnendra.

15. A pile of gems, and

16. Fire without smoke.

Free from the morning engagements, mother Trishla to King Siddhartha and so a went to King Siddhartha and told him of the sixteen dreams. She wanted to know their effect. The king was well versed in Nimitta Shastra (scripture of instrumental causes). He was very happy to know of the dreams. The auspicious effect of the very happy dreams was conveyed to mother Trishla by his very happy facial expressions. He told her that she was going to be blessed with a son, who would become a Tirthankar and rule over the hearts of the creatures of the three worlds, would propagate the principles of emancipation and would be very fortunate. The womb of Trishla became as holy as that of Marudevi who gave birth to the first Tirthankar Adinath or Rishabhdeo.

All in all, these dreams indicate that the son to be born to Trishla would be as soft as leaves of flowers, as cold as the moon, as illustrious as the sun, a destroyer of the darkness of ignorance, powerful as an elephant, active as a bull, deep as an ocean, pure as the pile of jewels and bright as the flame of a smokeless fire.

Boy Vardhman entered his mother’s womb on the sixth day of the second half of Ashad month.

Boy Vardhman was healthy, handsome and possessed of an attractive personality, since birth. He justified the name Vardhman given to him, growing like the digit of the moon on the second day of the bright fortnight. His gold like physique attracted all and sundry. The lord of gods himself assumed a thousand eyes to drink deep the beauty of the frame of the Lord.

He was a sentient, thoughtful, discriminate and fearless boy. He did not know any fear. He was an embodiment of courage. He was, therefore, known as Veer and Ativeer since his childhood. Five of his names are famous -Veer, Ativeer, Sanmati, Vardhman and Mahaveer.

He was prompt and ready-witted and never lost his balance in difficulties. One day, boy Vardhman delighting his parents and citizens by his childlike playfulness, was playing in the garden with other princes. He climbed a tree in his playful spirit. Meanwhile a terrible black snake encircled the trunk of the tree and began to emit fumes out of a fit of anger that would shake even the very strong. Finding themselves in adverse circumstances, the children began to shiver with fear, but that terrible snake could not disturb patient and strong child Mahaveer. Seeimg Mahaveer fearlessly and without hesitation coming near it, the furious snake left the fury and went his way.

In the same way, once, an elephant became made and began to spread havoc in the city, breaking away from the pillar of the building in which elephants are kept. The whole city was agog and people began to run from one place to the other in panic. Prince Vardhman, however, did not lose his presence of mind and controlled the elephant with his power and cleverness. The bravery and patience of the Prince became a talk of the common men in the city.

He was a genius and could solve great problems easily. He was quiet by nature; the seriousness grew with his entry into youth. He loved loneliness. He was always busy pondering over the fundamentals of life and death and indulged in deep discussions. Those eager to get to truth, placed their misgivings before him and he solved them in no time. Most of the doubts and misgivings were resolved by the sight of his calm posture. The big doubts about the fundamentals of religion of the big monks were removed by just having a look at his physical frame. He was himself a solution of these misgivings.

One day he was sitting in the fourth storey of his palace deeply engrossed in contemplation. His comrades came and asked mother Trishla where Vardhman was. Busy in her household, the mother just pointed to the upper storey. The boys ran to the seventh storey, but did not find Vardhman there. When they asked King Siddhartha, who was studying religious texts, where Vardhman was, he just pointed to the lower storeys. Hearing the contradictory statements of the father and the mother, the boys were confused. They searched every storey and found Vardhman in the fourth one, studying. The boys complained that they had searched all the storeys of the palace and Mahaveer was hiding there as a philosopher. Vardhman asked them why they did not ask the mother to tell them where he was. The boys said that the whole trouble arose out of the asking. The mother told them that he was up, while the father told them that he was downstairs. The problem was where to find and where the truth lay. Vardhman told them that both were correct; that he was on the fourth storey, up from the point of view of the mother and down from the point of view of the father. The mother was on the first storey, while the father on the seventh. The positions downwards and upwards are relative. Without relativity there is no question of downwards or upwards. Though the nature of the substance is without any relation with any other substance, the description is relative. Thus boy Vardhman used to explain lofty principles to the boys easily.

The world tried to persuade him to follow their path but Mahaveer was engrossed deep in the depths of his soul and so the world could not entangle him to follow their path. Youth threw its die on him, but in vain. The parental affections tried to block his way, but he did not float on the flood of his mother’s tears.

Accordingly he left his home in the thirtieth year of his youth, on the tenth day of the first half of Magsir. He became naked and engaged himself in the pursuit of his self in that solitary forest. The Laukantik gods came from the heavens and praised him for his resolve with great reverence. Monk Vardhman used to remain silent and did not talk to anybody. He was always engrossed in the contemplation of his soul. He did not even remember that he needed a bath or the cleaning of his teeth. He used to rest in the caves of the mountains, holding friends and foes alike, and was not disturbed by the fury of the inclemencies of weather.

The cruel animals of the forest saw is calm posture, natural ease and non-violent life and forgot their natural enmity and became friends. Snakes and mongooses, tigers and cows used to drink water from the same wharf. Wherever he stayed, the whole atmosphere was full of peace and quiet.

If sometimes he happened to have a liking for food, he would go to the nearest town with strange mental reservations. If some householder gave him pure food according to the scriptures’ command and with nine types of rituals, he would take his meals and soon return to the forests. He also accepted food once at the hands of grief-ridden Sati Chandanbala.

Thus engaged in external and internal penances, he spent twelve years. At the age of forty-two in this state of deep self-absorption he annihilated subtle attachment and attained the completely detached state of his being. With this state of spiritual development he attained omniscience also. He became real Mahaveer having conquered the enemies of delusion, attachment and aversion completely. He became a Bhagwan being an omniscient and a completely detached being. In theite fruition of Tirthankar Namkaram, he got that status and was known as Bhagwan Mahaveer. His divine message was delivered first on the first day of the. month of Shravan, on account of which this day has been celebrated in the whole of India as Veer Shasan Jayanti.

Kuber was ordered by the Lord of the gods to construct a huge meeting-hall called the Samavsharan for the worldly creatures to meet and hear the divine message of Lord Mahaveer. Every being was entitled to go there and hear the message. There was no distinction of big or small. One whose conduct is non-violent, who has touched the intrinsic nature of substances, who has dived deep in his own self, is greater than not only human beings but also gods, though he may be born in a low family.

In his religious congregation kings and the commons, rich and poor, black and white, all sat together and listened to his message. Animals along with gods and humans also sat there and listened to the divine teachings of the Lord. Such equality amongst the creatures of this world is difficult elsewhere. In the fourfold federation of the Lord, there were monks, she-monks, male and female householders.

Many learned scholars opposed to him, became his disciples shunning their own wrong conceptions, after being influenced by his message of universal love and goodwill. The chief amongst them was his chief disciple Indrabhuti Gautam. He was accepted as the first preceptor of the Lord and became famous as Gautam Swami. The story of how he was initiated into Digamber Jain monkhood is quite interesting.

Indrabhuti Gautam was well versed in the Vedas and Vedangas. He had five hundred disciples. When the Indra realised that Indrabhuti Gautam alone could become the chief preceptor of the Lord, he went to his abode in disguise of an old Brahmin, Indra introduced himself as a disciple of Mahaveer and asked Gautam the meaning of a Sanskrit verse.

Indrabhuti became thoughtful. “What are these six substances, nine matters, five Astikayas etc. ?” He concealed his ignorance in his pride and told Indra that he would like to discuss these with his master i. e., Lord Mahaveer. He expressed his desire to accompany lndra to the place where the Lord was delivering his sermons. The time was ripe for the reception of real spiritualism in the case of Gautam and for the Lord to start delivering his long awaited message of religion. As Indrabhuti Gautam came near the Samavsharan his rigidity suddenly turned into softness. His pride disappeared at the sight of the Manstambha, (a pillar just in front of the Samavsharan) and he approached the Lord with a request for his own initiation into monkhood. By his own ability and the magnanimity of Mahaveer, he became the first Gandhar of the Lord. There were ten other Gandharas whose names were; (1) Agnibhuti, (2)Vayubhuti, (3) Aryavyakta, (4) Sudharma, (5) Mandit, (6)Mauryaputra, (7) Akampit, (8) Achaibhrata, (9) Metarya and (10) Prabhas.

Amongst his householder disciples Maharaj Shrenik (Bimbsar), the king of Magadh, was the chief.

He traversed the length and breadth of India continuously for thirty years. Different beings understood his teachings in their own languages. His sermons were called Divya Dhwani. He has upheld the independence of the soul and all other substances. He declared that every soul is independent; none depends upon the other; self-reliance is the way to achieve complete independence. Self-reliance is nothing but centralisation of one’s vision on one’s soul only, different from colour, attachment and division. Independence can only be achieved on one’s own strength; you can’t get infinite bliss and independence in charity or achieve them on others’ strength.

All souls are separate and independent, not one, but like one, similar, none big or small. He, therefore, ordained :-

1. Regard other souls as your own.

2. All souls are equal, but not one.

3. If our efforts are directed towards right direction, every soul can attain godhood.

4. Every creature is unhappy on account of his own mistakes, and can become happy by removing the mistakes.

Mahaveer did not propagate any new truth; there is nothing like old or new in truth. Whatever he said is true and eternal. He did not establish truth; he only inaugurated it. He did not found any new religion. Religion is the nature of substances. The nature of substances cannot be built. How can that which can be built be called nature ? It can only be known. Remaining away from the pride of doing and detaching himself from non-self entities one who knows the self and the non-self, without in any way being influenced by others, and in all their perspectives, is God. Tirthankar Bhagwan knows and exposes the nature of things, does not create them.

He was a Tirthankar. He propounded the Tirtha i.e., the way to the liberation of the soul. Acharya Samant Bhadra has called his teachings Sarvodaya Tirtha (religion that preaches the welfare of all living beings).

Oh Lord Mahaveer – Your religion is for the welfare of one and all. There is no contradiction in your teachings, only whatever you say is relative i.e. described from different perspectives, one predominating the other according to contexts; the assertions of other preachers, not being relative, are not able to propound the nature of things, as they are. Your exposition of the truth of life is capable of destroying all the miseries and misfortunes of this world and of leading worldly beings to their supreme happiness and as such it is Sarvodaya Tirtha i.e., religion for the welfare of all living beings.”

That which leads to the welfare of all is Sarvodya. The religion for the welfare of all as propounded by Lord Mahaveer and his exposition of truths of life and immortality, have no narrowness or limits. The religion of the soul is for all creatures. It is a kind of narrowness to associate religion with human beings only. It is a religion of all the living beings. The term “religion of man” is also not liberal enough. It limits the scope of religion to the community of human beings only, while religion extends to all the sentient world, for all the creatures want to live in peace and happiness.

Tirthankar Bhagwan Mahaveer has expounded the complete independent existence of every substance and that every substance changes its modifications itself. No other substance can interfere in this natural procedure. Even God, the almighty, is not the creator or the destroyer of, this existence of the things. The preachings of Mahaveer upheld the independence not only of the living beings, but of all the atoms, which are the smallest (indivisible) particles or units of matter substance and which cannot be further divided. The desire to interfere in the activity of others is false, of no avail and causing unhappiness, for it is sheer ignorance to regard others as the creator or destroyer of happiness and misery, life and death, of other beings.

It has been well said that our own merits and demerits will be meaningless if one being is regarded as the creator of others’ happiness and misery, life and death. The question is – can anybody, however strong, make us happy, even, if we indulge in demerits ? Likewise can anybody, be it God himself, harm us, if we keep ourselves busy in meritorious engagements ? If yes, it would be worthless to do good and be afraid of the bad, because it is not necessary to reap the consequences of one’s actions. If it is true that we have to reap the consequences of our own actions, good and bad, the concept of any interference is meaningless. The same truth has been expressed by Acharya Amitgati in Slokas 30-31 of Bhawna Dwatrinshatika.

In the end, at the age of seventy-two, on the Dipawali day, the last Tirthankar of this epoch Bhagwan Mahaveer, abandoned this physical frame and attained Nirwan (complete liberation). The same day, his chief disciple Indrabhuti Gautam achieved omniscience. According to Jain tradition, the great festival of Deepawali is celebrated in honour of the liberation of Bhagwan Mahaveer and attainment of complete sentience by his chief disciple Gautam.`,
        questions: [
          {
            id: 'q1',
            question: 'Who was Tirthankar Mahavir?',
            options: ['The last and twenty-fourth Tirthankar', 'The first king of Magadh', 'A Brahmin scholar', 'A Buddhist monk'],
            correctAnswer: 0,
            marks: 2,
            difficulty: 'medium',
            explanation: 'The story clearly states that Mahavir was the last and twenty-fourth Tirthankar of this epoch.',
          },
          {
            id: 'q2',
            question: 'What happened on the day of Deepawali?',
            options: ['Mahavir was born', 'Mahavir attained Nirvana', 'King Shrenik was crowned', 'Indrabhuti debated Mahavir'],
            correctAnswer: 1,
            marks: 2,
            difficulty: 'medium',
            explanation: 'The story says that on the Dipawali day Mahavir abandoned his physical frame and attained Nirwan.',
          },
          {
            id: 'q3',
            question: 'What was Mahavir’s childhood name?',
            options: ['Vardhman', 'Indrabhuti', 'Shrenik', 'Chetak'],
            correctAnswer: 0,
            marks: 1,
            difficulty: 'easy',
            explanation: 'The story says Mahavir’s parents named him Vardhman because of his constant growth.',
          },
          {
            id: 'q4',
            question: 'At what age did Mahavir attain omniscience?',
            options: ['Thirty', 'Forty-two', 'Seventy-two', 'Ninety-two'],
            correctAnswer: 1,
            marks: 2,
            difficulty: 'medium',
            explanation: 'The story says Mahavir spent twelve years in penance and attained omniscience at the age of forty-two.',
          },
          {
            id: 'q5', question: 'How many Tirthankaras were there in one epoch and Bharatkshetra?', options: ['Twelve', 'Twenty-four', 'Forty-two', 'Seventy-two'], correctAnswer: 1, marks: 1, difficulty: 'easy', explanation: 'The story says Tirthankaras in one epoch and in Bharatkshetra are twenty-four only.'
          },
          {
            id: 'q6', question: 'What did Mahavir conquer to become a God?', options: ['His kingdom', 'Himself', 'The forest', 'The Samavasarana'], correctAnswer: 1, marks: 1, difficulty: 'easy', explanation: 'The story says Mahaveer became a God when he conquered himself.'
          },
          {
            id: 'q7', question: 'How many years did Mahavir spend pursuing the supreme soul in the jungles?', options: ['Twelve years', 'Thirty years', 'Forty-two years', 'Seventy-two years'], correctAnswer: 0, marks: 1, difficulty: 'easy', explanation: 'The story says Mahavir spent the next twelve years in the jungles in deep meditation.'
          },
          {
            id: 'q8', question: 'What was the festival of Mahavir’s birth called?', options: ['Veer Shasan Jayanti', 'Janma Kalyanak Mahotsava', 'Deepawali', 'Sarvodaya Tirtha'], correctAnswer: 1, marks: 1, difficulty: 'easy', explanation: 'The story says the festival of his birth is called Janma Kalyanak Mahotsava.'
          },
          {
            id: 'q9', question: 'How many dreams did Queen Trishala see?', options: ['Four', 'Ten', 'Sixteen', 'Twenty-four'], correctAnswer: 2, marks: 1, difficulty: 'easy', explanation: 'The story lists the sixteen dreams seen by mother Trishala.'
          },
          {
            id: 'q10', question: 'What name was Mahavir also known by during childhood?', options: ['Veer and Ativeer', 'Suvrat and Yamadhar', 'Chetak and Shrenik', 'Dhanya and Ahamidra'], correctAnswer: 0, marks: 1, difficulty: 'easy', explanation: 'The story says Mahavir was known as Veer and Ativeer since childhood.'
          },
          {
            id: 'q11', question: 'What did Mahavir control in the city?', options: ['A black snake', 'An elephant', 'A tiger', 'A herd of cows'], correctAnswer: 1, marks: 1, difficulty: 'easy', explanation: 'The story says Prince Vardhman controlled an elephant that had become mad.'
          },
          {
            id: 'q12', question: 'What did Mahavir do in his thirtieth year?', options: ['He left home', 'He became a king', 'He built the Samavasarana', 'He met Gautam Swami'], correctAnswer: 0, marks: 1, difficulty: 'easy', explanation: 'The story says Mahavir left his home in the thirtieth year of his youth.'
          },
          {
            id: 'q13', question: 'What did the cruel forest animals do after seeing Mahavir’s non-violent life?', options: ['They became friends', 'They attacked the city', 'They left the forest', 'They followed the king'], correctAnswer: 0, marks: 1, difficulty: 'easy', explanation: 'The story says the animals forgot their natural enmity and became friends.'
          },
          {
            id: 'q14', question: 'What did Mahavir’s teachings uphold?', options: ['The independence of the soul', 'The power of kings', 'Animal sacrifice', 'The separation of the rich and poor'], correctAnswer: 0, marks: 2, difficulty: 'medium', explanation: 'The story says Mahavir upheld the independence of the soul and all other substances.'
          },
          {
            id: 'q15', question: 'Who attained omniscience on the same day Mahavir attained Nirvana?', options: ['King Siddhartha', 'Indrabhuti Gautam', 'King Chetak', 'Seth Chanpal'], correctAnswer: 1, marks: 2, difficulty: 'medium', explanation: 'The story says Mahavir’s chief disciple Indrabhuti Gautam achieved omniscience on the same day.'
          },
        ],
      },
    ],
  },
];
*/

export const getStoryById = (storyId: string) => storyLibrary.find((story) => story.id === storyId) ?? null;
export const allStories = storyLibrary;
