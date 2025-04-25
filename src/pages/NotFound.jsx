import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { Button } from '../components/common/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
            <p className="mt-4 text-text-light">
              The page you\'re looking for doesn\'t exist or has been moved.
            </p>
            <div className="mt-8">
              <Button onClick={() => navigate('/')}>Return Home</Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default NotFound; 