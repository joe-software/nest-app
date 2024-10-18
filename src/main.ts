import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module';
import { join } from 'path';

import { Edge } from 'edge.js'


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const edge = new Edge()
  // edge.mount(join(__dirname, '..', './src/views'))
    app.setBaseViewsDir(join(__dirname, '..', '/src/views'));
    app.useStaticAssets(join(__dirname, '..', '/src/public'));
    app.engine('edge', (path, options, callback) =>
    edge
      .render(path, options)
      .catch((error) => callback(error))
      .then((rendered) => callback(null, rendered))
  );
  app.setViewEngine('edge')
  await app.listen(process.env.PORT || 3000);
  
}
bootstrap();


