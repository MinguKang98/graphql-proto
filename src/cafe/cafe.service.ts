import {Injectable} from "@nestjs/common";

@Injectable()
export class CafeService {

    data = [
        {
            id: '1',
            name: 'starbucks1',
            location: '장안1동',
        },
        {
            id: '2',
            name: 'starbucks2',
            location: '장안2동',
        },
        {
            id: '3',
            name: 'starbucks3',
            location: '장안3동',
        },
        {
            id: '4',
            name: 'starbucks4',
            location: '장안4동',
        },
        {
            id: '5',
            name: 'starbucks5',
            location: '장안5동',
        },
    ];

    async findAll() {
        return this.data;
    }

}