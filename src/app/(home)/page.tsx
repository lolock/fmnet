import Link from 'next/link';
import { source } from '@/lib/source'; // 导入 source 对象
import { Card, Cards } from 'fumadocs-ui/components/card'; 
import type { Page } from 'fumadocs-core/source'; // 导入 Page 类型

export default function HomePage() {
  // 使用 source.getPages() 获取所有文档页面
  const latestArticles = source.getPages() // 调用 source 对象的 getPages 方法
    .filter((file: Page) => file.data?.title) // 直接访问 file.data.title
    .slice(0, 4); // 获取前4篇文章作为示例

  // 获取第一个文档页面的 URL
  const allDocs = source.getPages();
  const firstDocUrl = allDocs.length > 0 ? allDocs[0].url : '/docs'; // 如果没有文档，则默认为 /docs

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          探索、学习、创造
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          欢迎来到您的知识库。从最新的文章开始探索。
        </p>

        {/* 最新文章区域 */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">最新文章</h2>
          {latestArticles.length > 0 ? (
            <Cards>
              {latestArticles.map((article: Page) => ( // 添加 Page 类型注解
                <Card
                  key={article.url}
                  title={article.data.title} // 直接访问 article.data.title
                  description={article.data.description ?? '点击阅读更多...'} // 直接访问 article.data.description
                  href={article.url} // 文章链接
                />
              ))}
            </Cards>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">暂无文章。</p>
          )}
        </div>

        {/* 保留原有的“开始探索”按钮 */}
        <div className="flex justify-center gap-4 mb-16">
          <Link
            href={firstDocUrl} // 更新 href 指向第一个文档
            className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            查看所有文档
          </Link>
        </div>

        <p className="mt-20 text-sm text-gray-500 dark:text-gray-400">
          构建未来 · 知识驱动 · {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
