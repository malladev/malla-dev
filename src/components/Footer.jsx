export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-5xl py-5 mb-5 border-t">
        <div className="md:order-1">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Mohamed Lamine KONE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
