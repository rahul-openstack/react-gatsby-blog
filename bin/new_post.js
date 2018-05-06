import prompt from 'prompt';
import mkdirp from 'mkdirp';
import moment from 'moment';
import str from 'underscore.string';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

prompt.start()
prompt.get(['title', 'description', 'tags'], (err, result) => {
  const postName = `${moment().format('YYYY-MM-DD')}-${str.slugify(result.title)}`;
  const dir = path.resolve(__dirname, '..', 'pages', 'blog', postName)
  mkdirp.sync(dir);

  let postString = "---\n";
  const frontMatter = {
    title: result.title,
    date: moment().toJSON(),
    layout: 'post',
    draft: true,
    description: result.description,
    tags: result.tags,
    path: `/blog/${str.slugify(result.title)}/`,
  };
  postString += yaml.safeDump(frontMatter);
  postString += "---\n";

  fs.writeFileSync(`${dir}/index.md`, postString, { encoding: 'utf-8' })
});
