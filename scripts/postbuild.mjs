import rss from './rss.mjs'

async function postbuild() {
  try {
    await rss();
    console.log('✅ RSS generation completed successfully');
    process.exit(0); // Success exit code
  } catch (error) {
    console.error('❌ RSS generation failed:', error);
    process.exit(1); // Failure exit code
  }
}


postbuild()
