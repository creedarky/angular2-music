const barrels: string[] = [
  'app',
  'app/album-cover',
  'app/album-page',
  'app/tracks-page',
  /** @cli-barrel */
];

function createPackageConfig(barrels: string[]): any {
  return barrels.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
    // Add your custom SystemJS packages here.
  }, createPackageConfig(barrels))
};