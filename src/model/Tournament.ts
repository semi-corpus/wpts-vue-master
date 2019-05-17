import {Team} from '@/model/Team';

export class Tournament {
    private static shuffle(a: Team[]) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    private pools: Team[][];

    constructor(private teams: Team[]) {
        Tournament.shuffle(this.teams);

        const poolCount = Math.ceil(this.teams.length / 4);
        this.pools = new Array(poolCount).fill(null).map(() => []);
        let i = 0;
        for (const team of teams) {
            this.pools[i % poolCount].push(team);
            i++;
        }
    }
}
