export const load = async () => {
  const allFiles = import.meta.glob('/static/gallery/*');

  const photos = await Promise.all(
    Object.entries(allFiles).map(async ([path]) => {
      const photoPath = path.slice('/static/'.length);

      return {
        path: photoPath
      };
    })
  );
  return { photos };
};
