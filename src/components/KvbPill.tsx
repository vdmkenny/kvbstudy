import type { LevelId } from '../types';
import { accentVoor, KVB_LABELS } from '../data';

/** Pill die het (eerste) KVB-niveau toont in zijn accentkleur, of 'geen KVB'. */
export function KvbPill({ id }: { id?: LevelId }) {
  if (!id) {
    return (
      <span className="rounded-full bg-sand-200 px-2.5 py-0.5 text-[11px] font-medium text-bark-600">
        geen KVB
      </span>
    );
  }
  return (
    <span
      className="rounded-full px-2.5 py-0.5 text-[11px] font-medium text-white"
      style={{ backgroundColor: accentVoor(id) }}
    >
      {KVB_LABELS[id]}
    </span>
  );
}
