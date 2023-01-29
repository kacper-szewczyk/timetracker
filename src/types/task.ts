export type Records = {
    id: string;
    startedAt: number;
    finishedAt?: number;
}

export type Task = {
    id: string;
    title: string;
    time: number;
    records: Records[];
}