import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {iCommit} from './interface/commit.interface';

const access_token = "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"


@Injectable()
export class AppService {
  async getHello(): Promise<iCommit> {
    try {
      const response = await axios.get('https://api.github.com/repos/soygustavogonzales/fulltimeforce/commits', {
        headers: {
          'Authorization': `${access_token}`
        }
      })
  
      const data = response.data.map( (e:any) => {
        return {
          author_name: e.commit.author.name,
          commit_message: e.commit.message,
          commit_url: e.commit.url,
          date: e.commit.author.date
        }
      });
    return data;

    } catch(err) {
      console.error(err)
      return err;
    }
  }
}
