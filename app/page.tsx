'use client';

import { Container, Heading, Text, Card, Flex, Link, Box } from '@radix-ui/themes';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Hyperspeed from '@Hyperspeed';
import SplitText from '@blocks/TextAnimations/SplitText/SplitText';
import Image from 'next/image';

const MotionCard = motion(Card);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function Home() {
  const news = [
    {
      date: '2025年4月',
      content: 'Try! Swift 2025年にスタッフとして参加'
    },
    {
      date: '2025年3月',
      content: '内定者インターン就業開始'
    },
    {
      date: '2025年2月',
      content: '学生IT団体watnowの副代表を退任'
    },
    {
      date: '2024年11月',
      content: 'watnow秋プロジェクト最優秀賞受賞'
    },
    {
      date: '2024年8月',
      content: 'iOSDC Japan 2024に参加'
    },
    {
      date: '2024年2月',
      content: '学生IT団体watnowの副代表に就任'
    },
    {
      date: '2023年12月',
      content: '技育CAMPアドバンスvol.4 副大賞受賞'
    },
    {
      date: '2023年10月',
      content: '技育キャンプキャラバンハッカソン大阪 優秀賞受賞'
    },
    {
      date: '2023年8月',
      content: '関西ビギナーズハッカソンvol2 最優秀賞受賞'
    },
    {
      date: '2023年4月',
      content: '学生IT団体watnowに参加'
    },
  ];

  const skills = [
    {
      name: 'Swift',
      icon: '/icons/swift.png',
    },
    {
      name: 'Flutter',
      icon: '/icons/flutter.png',
    },
    {
      name: 'GO',
      icon: '/icons/go.png',
    }
  ];

  const hobbies = [
    'ツーリング',
    'Vaundyライブ参戦',
    '美味しいコーヒーを探してカフェ巡り',
    '旅行(最近は北海道、沖縄に行きました)',
    'アニメ(呪術、ヒロアカ、水星の魔女など様々)',
    '料理'
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
            <Flex direction="column" gap="4">
              <MotionHeading size="8" variants={itemVariants} style={{ color: 'white' }}>
                株丹優一郎
              </MotionHeading>
              <MotionText size="3" variants={itemVariants} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                立命館大学4年生<br />
                情報理工学部情報理工学科
              </MotionText>
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
              {skills.map((skill, index) => (
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
        </Flex>
      </Container>
    </>
  );
}
