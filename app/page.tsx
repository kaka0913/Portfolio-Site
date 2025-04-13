'use client';

import { Container, Heading, Text, Card, Flex, Link, Box } from '@radix-ui/themes';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Hyperspeed from '@Hyperspeed';
import SplitText from '@blocks/TextAnimations/SplitText/SplitText';

const MotionCard = motion(Card);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function Home() {
  const news = [
    {
      date: '2025年4月',
      content: 'Try! Swift 2025年にスタッフとして参加しました'
    },
    {
      date: '2025年3月',
      content: '内定者インターンの就業開始'
    },
    {
      date: '2025年2月',
      content: '学生IT団体watnowの副代表を退任'
    }
  ];

  const skills = ['Swift', 'Flutter', 'GO'];

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
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
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
              delay={150}
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
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>
        </div>
      </div>

      <Container size="3" className="py-8">
        <Flex direction="column" gap="6">
          {/* プロフィールセクション */}
          <MotionCard
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ 
              background: 'rgba(0, 0, 0, 0.7)',
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
              background: 'rgba(0, 0, 0, 0.7)',
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
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card style={{ 
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <Text size="2" style={{ color: 'white' }}>{skill}</Text>
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
              background: 'rgba(0, 0, 0, 0.7)',
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
                  <Box>
                    <Text weight="bold" style={{ color: 'white' }}>{item.date}</Text>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{item.content}</Text>
                  </Box>
                </motion.div>
              ))}
            </Flex>
          </MotionCard>
        </Flex>
      </Container>
    </>
  );
}
