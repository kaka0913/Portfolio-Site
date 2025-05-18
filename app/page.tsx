'use client';

import { Container, Heading, Text, Card, Flex, Link, Box } from '@radix-ui/themes';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Hyperspeed from '@Hyperspeed';
import SplitText from '@blocks/TextAnimations/SplitText/SplitText';
import DecryptedText from '@blocks/TextAnimations/DecryptedText/DecryptedText';
import Image from 'next/image';

const MotionCard = motion(Card);
const MotionHeading = motion(Heading);

export default function Home() {
  const news = [
    {
      date: "2025年4月",
      content: "Try! Swift 2025年にスタッフとして参加",
    },
    {
      date: "2025年3月",
      content: "DeNA内定者インターン就業開始",
    },
    {
      date: "2025年2月",
      content: "学生IT団体watnowの副代表を退任",
    },
    {
      date: "2024年11月",
      content: "watnow秋プロジェクト最優秀賞受賞 👑",
    },
    {
      date: "2024年8月",
      content: "iOSDC Japan 2024に参加",
    },
    {
      date: "2024年2月",
      content: "学生IT団体watnowの副代表に就任",
    },
    {
      date: "2023年12月",
      content: "技育CAMPアドバンスvol.4 副大賞受賞 👑",
    },
    {
      date: "2023年10月",
      content: "技育キャンプキャラバンハッカソン大阪 優秀賞受賞 👑",
    },
    {
      date: "2023年8月",
      content: "関西ビギナーズハッカソンvol2 最優秀賞受賞 👑",
    },
    {
      date: "2023年4月",
      content: "学生IT団体watnowに参加しFlutterを学ぶ",
    },
    {
      date: "2022年4月",
      content: "立命館大学情報理工学部に入学し情報系の学習を開始",
    },
  ];

  const skills = [
    {
      name: "Swift",
      icon: "/icons/swift.png",
    },
    {
      name: "Flutter",
      icon: "/icons/flutter.png",
    },
    {
      name: "GO",
      icon: "/icons/go.png",
    },
    {
      name: "React",
      icon: "/icons/react.png",
    },
  ];

  const features = [
    "日本で80人の珍しめの苗字",
    "大学からプログラムを始めてモバイルアプリを中心に開発に取り組む",
    "大学3年生の頃には学生IT団体watnowの副代表として年間計画を立案し団体を運営",
    "複数の企業での実務インターン経験あり",
    "現在はDeNAの内定を承諾し内定者インターンとして就業中",
    "MBTI: 幹部 (ESTJ-T)",
  ];

  const hobbies = [
    "ツーリング（ #YZF-R15）",
    "ラジオ（ #霜降り明星のANN）",
    "ライブ参戦（ #髭ダン #King Nue #Vaundy #Tele）",
    "美味しいコーヒーを探してカフェ巡り（#滋賀、#河原町）",
    "旅行（ #沖縄 #北海道 #広島 #金沢 #静岡）",
    "アニメ（ #呪術 #ヒロアカ #ジークアクス #ラザロ）",
  ];

  const photos = [
    '/images/IMG_8487.png',
    '/images/IMG_9413.png',
    '/images/IMG_9108.png',
    '/images/IMG_9213.png',
    '/images/IMG_9119.png',
    '/images/IMG_9353.png',
    '/images/IMG_9542.png',
    '/images/IMG_9617.png',
    '/images/IMG_9941.png',
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <div style={{ height: '100vh', position: 'relative' }}>
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'mountainDistortion',
            length: 400,
            roadWidth: 9,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 50,
            lightPairsPerRoadWay: 50,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
        
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.05, 400 * 0.15],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.2, 0.2],
            carFloorSeparation: [0.05, 1],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0xff102a, 0xEB383E, 0xff102a],
              rightCars: [0xdadafa, 0xBEBAE3, 0x8F97E4],
              sticks: 0xdadafa,
            }
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '100%',
          fontSize: '12rem'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>
            <SplitText
              text="Yuichiro Kabutan"
              className="text-9xl font-bold text-white"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div style={{ fontSize: '2rem' }}>
            <SplitText
              text=" Student / Engineer "
              className="text-6xl text-white/90"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>
        </div>
      </div>

      <Container size="3" className="py-8" style={{ marginTop: '2rem' }}>
        <Flex direction="column" gap="6">
          {/* プロフィールセクション */}
          <MotionCard
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ 
              background: 'rgba(17, 17, 19, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Flex direction="column">
              <MotionHeading size="6" mb="4" variants={itemVariants} style={{ color: 'white' }}>
                <DecryptedText
                  text="株丹優一郎"
                  speed={150}
                  maxIterations={20}
                  animateOn="view"
                  revealDirection="center"
                />
              </MotionHeading>
              <motion.div variants={itemVariants}>
                <DecryptedText
                  text="立命館大学4年生 情報理工学部情報理工学科 SAコース"
                  speed={150}
                  maxIterations={20}
                  animateOn="view"
                  revealDirection="start"
                  className="text-lg text-white/90"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Flex gap="4">
                  <Link href="https://x.com/kabu0913" target="_blank">
                    <Flex gap="2" align="center" style={{ color: 'white' }}>
                      <TwitterLogoIcon width="20" height="20" />
                      <Text>X (Twitter)</Text>
                    </Flex>
                  </Link>
                  <Link href="https://github.com/kaka0913" target="_blank">
                    <Flex gap="2" align="center" style={{ color: 'white' }}>
                      <GitHubLogoIcon width="20" height="20" />
                      <Text>GitHub</Text>
                    </Flex>
                  </Link>
                </Flex>
              </motion.div>
            </Flex>
          </MotionCard>

          {/* スキルセクション */}
          <MotionCard
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ delay: 0.3 }}
            style={{ 
              background: 'rgba(17, 17, 19, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <MotionHeading size="6" mb="4" variants={itemVariants} style={{ color: 'white' }}>
              技術スタック
            </MotionHeading>
            <Flex gap="2" wrap="wrap">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card style={{ 
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <Flex align="center" gap="2">
                      <div style={{ width: '24px', height: '24px', position: 'relative' }}>
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <Text size="2" style={{ color: 'white' }}>{skill.name}</Text>
                    </Flex>
                  </Card>
                </motion.div>
              ))}
            </Flex>
          </MotionCard>

          {/* 特徴セクション */}
          <MotionCard
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ delay: 0.9 }}
            style={{ 
              background: 'rgba(17, 17, 19, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <MotionHeading size="6" mb="4" variants={itemVariants} style={{ color: 'white' }}>
              特徴
            </MotionHeading>
            <Flex direction="column" gap="3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <Text style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    • {feature}
                  </Text>
                </motion.div>
              ))}
            </Flex>
          </MotionCard>

          {/* ニュースセクション */}
          <MotionCard
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ delay: 0.6 }}
            style={{ 
              background: 'rgba(17, 17, 19, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <MotionHeading size="6" mb="4" variants={itemVariants} style={{ color: 'white' }}>
              News
            </MotionHeading>
            <Flex direction="column" gap="3">
              {news.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <Flex align="center" gap="6">
                    <Text weight="bold" style={{ color: 'white', minWidth: '100px' }}>{item.date}</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{item.content}</Text>
                  </Flex>
                </motion.div>
              ))}
            </Flex>
          </MotionCard>

          {/* 趣味セクション */}
          <MotionCard
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ delay: 0.9 }}
            style={{ 
              background: 'rgba(17, 17, 19, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <MotionHeading size="6" mb="4" variants={itemVariants} style={{ color: 'white' }}>
              趣味
            </MotionHeading>
            <Flex direction="column" gap="3">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <Text style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    • {hobby}
                  </Text>
                </motion.div>
              ))}
            </Flex>
          </MotionCard>

          {/* フォトギャラリーセクション */}
          <MotionCard
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ delay: 1.2 }}
            style={{ 
              background: 'rgba(17, 17, 19, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden'
            }}
          >
            <MotionHeading size="6" mb="2" variants={itemVariants} style={{ color: 'white' }}>
              フォトギャラリー
            </MotionHeading>
            <Box style={{ padding: '2rem 0' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1.5rem',
                  justifyItems: 'center',
                }}
              >
                {photos.map((src, idx) => (
                  <div key={idx} style={{ width: '100%', maxWidth: 250, aspectRatio: '1/1', position: 'relative', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.2)' }}>
                    <Image
                      src={src}
                      alt={`photo-${idx}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </Box>
          </MotionCard>
        </Flex>
      </Container>
    </>
  );
}
