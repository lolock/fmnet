import { RootLayout } from 'fumadocs-ui/layout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-4xl">
        <h1 className="text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          探索、学习、创造
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          欢迎来到您的知识库。在这里，您可以找到详细的文档、指南和技术洞见。
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/docs" 
            className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            开始探索文档
          </Link>
        </div>
        <p className="mt-20 text-sm text-gray-500 dark:text-gray-400">
          构建未来 · 知识驱动 · {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
