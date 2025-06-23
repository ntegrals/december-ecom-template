export default function NavBar() {
  return (
    <div className="bg-[#007E3F] text-yellow-400">
      <header
        className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between
      w-full"
      >
        <div className="flex items-center gap-4 w-1/3">
          <button className="border border-yellow-400 rounded-full px-4 py-1 text-xs">
            Shop Grüns Adults
          </button>
          <button className="border border-yellow-400 rounded-full px-4 py-1 text-xs">
            Shop Grüns Kids
          </button>
        </div>

        <div className="flex-1 flex justify-center w-1/3">
          <a href="/" className="text-3xl font-bold">
            grüns
          </a>
        </div>

        <div className="flex items-center gap-4 w-1/3 justify-end">
          <a href="/account" className="text-sm">
            Account
          </a>
          <a href="/cart" className="w-6 h-6">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </a>
        </div>
      </header>
    </div>
  );
}
