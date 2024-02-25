import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Generator from './generator';



describe('Generator Component', () => {
  test('El componente debe renderizarse', () => {
    render(<Generator />);
    const message = screen.getByText(/Selecciona tu imagen y obtendras 3 diferentes tamaños/i);
    expect(message).toBeInTheDocument();
  });

  test('Solo imágenes PNG y JPEG', () => {
    const { getByTestId } = render(<Generator />);
    const input = getByTestId('input-file');

    const file = new File(['dummy file content'], 'test.png', { type: 'image/png' });

    fireEvent.change(input, { target: { files: [file] } });

    expect(input.files).toHaveLength(1);
    expect(input.files[0].name).toBe('test.png');
  });

  test('El área de carga de archivos debe estar presente', () => {
    render(<Generator />);
    const inputArea = screen.getByTestId('input-area');
    expect(inputArea).toBeInTheDocument();
  });
  test('El estado de "dragging" debe cambiar al arrastrar archivos', () => {
    render(<Generator />);

    const inputArea = screen.getByTestId('input-area');
    fireEvent.dragEnter(inputArea);
    expect(inputArea.className).toContain('sc-guDLey');
  });

  test('La descarga de miniaturas debe funcionar correctamente', () => {
    render(<Generator />);

    const input = screen.getByTestId('input-file');
    const file = new File(['dummy file content'], 'test.png', { type: 'image/png' });
    fireEvent.change(input, { target: { files: [file] } });

    setTimeout(() => {
      const downloadButton1 = screen.getByText('Descargar Miniatura 1');
      fireEvent.click(downloadButton1);

    }, 1000);
  });



});
