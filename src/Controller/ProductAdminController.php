<?php

namespace App\Controller;

use App\Entity\Product;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/product")
 */
class ProductAdminController extends AbstractController
{
    /**
     * @Route("/", name="product_admin_index", methods={"GET"})
     */
    public function index(Request $request, ProductRepository $productRepository): Response
    {
        $template = $request->query->get('isAjaxCall') ? '_list_table.html.twig' : 'index.html.twig';
        return $this->render('product_admin/' . $template, [
            /*order by products, last product on top */
            'products' => $productRepository->findBy([], ['id' => 'DESC']),
        ]);
    }

    /**
     * @Route("/new", name="product_admin_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $product = new Product();
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($product);
            $entityManager->flush();

            if ($request->isXmlHttpRequest()) {
                return new Response(null, Response::HTTP_NO_CONTENT);
            }

            return $this->redirectToRoute('product_admin_index');
        }

        /**
         * If it is an ajax request => return only form body
         * Only works with jquery ajax call
         * To use fetch see modal-form_controller.js + if ($request->get('isAjaxCall')) { TO DO }
         */
        $template = $request->isXmlHttpRequest() ? '_form.html.twig' : 'new.html.twig';

        return $this->render('product_admin/' . $template, [
            'product' => $product,
            'form' => $form->createView(),
        ], new Response(
            null,
            /*$form->isSubmitted() and not isValid() => the form has errors, will trigger the try/catch in modal-form_controller.js->submitForm() */
            $form->isSubmitted() ? Response::HTTP_UNPROCESSABLE_ENTITY : Response::HTTP_OK)
        );
    }

    /**
     * @Route("/{id}", name="product_admin_show", methods={"GET"})
     */
    public function show(Product $product): Response
    {
        return $this->render('product_admin/show.html.twig', [
            'product' => $product,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="product_admin_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Product $product): Response
    {
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('product_admin_index');
        }

        return $this->render('product_admin/edit.html.twig', [
            'product' => $product,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="product_admin_delete", methods={"POST"})
     */
    public function delete(Request $request, Product $product): Response
    {
        if ($this->isCsrfTokenValid('delete'.$product->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($product);
            $entityManager->flush();
        }

        return $this->redirectToRoute('product_admin_index');
    }
}
