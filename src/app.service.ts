import { Injectable } from '@nestjs/common';
import axios from 'axios';

const access_token = "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"


@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    try {
      const response = await axios.get('https://api.github.com/repos/soygustavogonzales/fulltimeforce/commits', {
        headers: {
          'Authorization': `${access_token}`
        }
      })
  
      const data = response.data.map( e => {
        return {
          author_name: e.commit.author.name,
          //author_profile_url: e.author.html_url || "",
          //author_avatar_url: e.committer.avatar_url || "",
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
