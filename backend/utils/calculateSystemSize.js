export function calculateSystemSize(dailyUsage, sunHours, panelWattage = 400) {
  const systemSizeKW = dailyUsage / sunHours;
  const numberOfPanels = Math.ceil((systemSizeKW * 1000) / panelWattage);
  return { systemSizeKW, numberOfPanels };
}