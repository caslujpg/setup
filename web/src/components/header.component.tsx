import { Plus } from 'phosphor-react';
import logoImage from '../assets/logo.svg';

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex justify-between items-center">
      <img src={logoImage} alt="Habits" />
      <button
        type="button"
        className="border border-violet-500 font-semibold rounded-large px-6 py-4 flex items-center gap-3 hover:border-violet-300"
      >
        <Plus size={20} className="text-violet-500" />
        New Habit
      </button>
    </div>
  );
}
