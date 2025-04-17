export const PostSummaryTextElement = ({ summary }: { summary: string }) => {
  return (
    <div className="relative group">
      <p
        className="prose max-w-none mt-3 text-base text-slate-800 dark:text-slate-300 
                   line-clamp-2 transition-all duration-200"
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
        title={summary}
      >
        {summary}
      </p>
    </div>
  )
}