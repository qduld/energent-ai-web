"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            The Future of Energy AI
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Transform your energy operations with our cutting-edge AI solutions.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium">
            Get Started
          </button>
        </div>
      </section>

      {/* AI Integration Hub */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI Integration Hub
          </h2>
          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6">
              <p className="text-gray-500">AI Chat Interface will be here</p>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                Google Gemini
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md">
                OpenAI
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
